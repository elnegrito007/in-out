import { Avatar, Box, Icon, Typography } from "@mui/material";

export default function SideBarUserCard(){
  return (
    <Box
      
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "15px",
        height: "12%",
        background: "rgba(255, 255, 255, 0.05);",
        boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.06)",
        borderRadius: "0px 0px 0px 8px;",
        padding: "20px",
        gap: "8px",
        position: "absolute",
        bottom: "5%"
      }}
    >
      <Avatar sx={{ bgcolor: "whitesmoke" }}>OP</Avatar>
      <Box>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: ".8rem",
          }}
        >
          Johan Torres
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: ".8rem",
          }}
        >
          JohanTorres@test
        </Typography>
      </Box>
      <Icon>
        <img src="/modules/sideBar/loguot.svg" height={16} width={15} />
      </Icon>
    </Box>
  );
};