import { Avatar, Box, Grid, Icon, Typography } from "@mui/material";

interface OnTopDashboardGridType {
  tittle: string;
  subTittle: string;
  quantity: number;
  percentage: number;
}

export default function OnTopDashboardGrid(props: OnTopDashboardGridType) {
  return (
    <Grid
      sx={{
        padding: "0",
        background: "#1a1d1f",
      }}
      item
      xs={12}
      sm={6}
      lg={2.875}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.4rem",
          }}
        >
          {props.tittle}
        </Typography>
        <strong style={{ fontSize: "1rem", color: "white", margin: 0 }}>
          {props.quantity}
        </strong>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: ".8rem",
            margin: 0,
          }}
          variant="subtitle1"
        >
          {props.subTittle}
        </Typography>
        <Typography
          sx={{
            color: "green",
          }}
        >
          {" "}
          %{props.percentage}
        </Typography>
      </Box>
    </Grid>
  );
}
