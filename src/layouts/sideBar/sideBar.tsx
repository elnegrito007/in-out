import { StarBorder } from "@mui/icons-material";
import { Avatar, Icon, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Route,
  defaultRoutes
} from "../../types/sideBarRoutes.type";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import SideBarUserCard from "@/components/sideBar-userCard/sideBarUserCard";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 230;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { user } = useSelector((state: any) => state);

  const [routes, setRoutesState] = useState(defaultRoutes);

  const setRoutes = () => {
    setRoutesState(user.role === "custom" ? defaultRoutes : defaultRoutes)
  }

  console.log(routes);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  const renderMenuOptions = () => {
    return routes.children.map((route: Route, index: number) => (
      <>
        <ListItem key={route.title} disablePadding>
          <ListItemButton
            onClick={() => {
              if (routes.children[index].children.length) {
                routes.children[index].expand = !routes.children[index].expand;
                setDrawerState(setDrawer());
                return;
              }
              router.push(routes.children[index].path);
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/modules/sideBar/home.svg" height={16} width={15} />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "0.9rem",
                color: "#f2f2f2",
              }}
              primary={route.title}
            />
            {route.children.length ? (
              route.expand ? (
                <ExpandLess
                  style={{ color: "whitesmoke", fontSize: "1rem" }}
                ></ExpandLess>
              ) : (
                <ExpandMore style={{ color: "whitesmoke", fontSize: "1rem" }} />
              )
            ) : (
              <></>
            )}
          </ListItemButton>
        </ListItem>

        {routes.children[index].children && renderChildsOptions(index)}
      </>
    ));
  };

  const renderChildsOptions = (parentIndex: number) => {
    return routes.children[parentIndex].children.map(
      (route: Route, index: number) => (
        <>
          <Collapse
            in={routes.children[parentIndex].expand}
            timeout="auto"
            unmountOnExit
          ></Collapse>
          <Collapse
            in={routes.children[parentIndex].expand}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 9 }}
                onClick={() => {
                  if (
                    routes.children[parentIndex].children[index].children.length
                  ) {
                    routes.children[parentIndex].children[index].expand =
                      !routes.children[parentIndex].children[index].expand;
                    setDrawerState(setDrawer());
                    return;
                  }
                  router.push(
                    routes.children[parentIndex].children[index].path
                  );
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "0.75rem",
                    color: "#f2f2f2",
                  }}
                  primary={route.title}
                />
                {route.children.length ? (
                  route.expand ? (
                    <ExpandLess
                      style={{ color: "whitesmoke", fontSize: ".7rem" }}
                    ></ExpandLess>
                  ) : (
                    <ExpandMore
                      style={{ color: "whitesmoke", fontSize: ".7rem" }}
                    />
                  )
                ) : (
                  <></>
                )}
              </ListItemButton>
            </List>
          </Collapse>
          {renderGrandChildsOptions(parentIndex, index)}
        </>
      )
    );
  };

  const renderGrandChildsOptions = (
    grandParentIndex: number,
    parentIndex: number
  ) => {
    return routes.children[grandParentIndex].children[parentIndex].children.map(
      (route: Route) => (
        <>
          <Collapse
            in={routes.children[grandParentIndex].children[parentIndex].expand}
            timeout="auto"
            unmountOnExit
          ></Collapse>
          <Collapse
            in={routes.children[grandParentIndex].children[parentIndex].expand}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 10 }}
                onClick={() => {
                  router.push(route.path);
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "0.7rem",
                    color: "#f2f2f2",
                  }}
                  primary={route.title}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      )
    );
  };

  const setDrawer = () => (
    <Box
      sx={{
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <Image src="/icons/logo.svg" width={150} height={35}></Image>
      </Box>

      <List
        className="routesList"
        sx={{
          marginTop: "30px",
          maxHeight: "65vh",
          overflow: "auto",
        }}
      >
        {renderMenuOptions()}
      </List>

      <SideBarUserCard></SideBarUserCard>
    </Box>
  );

  const [drawer, setDrawerState] = useState<JSX.Element>(setDrawer());

  useEffect(() => {
    setDrawerState(setDrawer());
    setRoutes()
  }, [routes]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ background: "#1A1D1F" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: "#1A1D1F",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#1A1D1F",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#1A1D1F",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
