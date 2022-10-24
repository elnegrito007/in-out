import { setFruits } from "@/actions/fruitsActions";
import BarChart from "@/components/bar-chart/bar-chart";
import DoughnutChart from "@/components/doughnut-chart/doughnut-chart";
import LineChart from "@/components/line-chart/line-chart";
import OnTopDashboardGrid from "@/components/onTopDashboardGrid/onTopDashboardGrid";
import { useThunkDispatch } from "@/helpers/useThunkDispacth";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Providers: NextPage = () => {
  const statuss = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    useThunkDispatch(dispatch, setFruits());
  }, []);

  console.log(statuss);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ maxHeight: "130px" }}>
        <Grid
          container
          sx={{ marginLeft: "0rem", paddingLeft: ".6rem", marginTop: ".5rem" }}
        >
          <OnTopDashboardGrid
            percentage={10}
            quantity={25}
            tittle="Dashboard"
            subTittle="Pedidos entregados"
          />
          <OnTopDashboardGrid
            percentage={10}
            quantity={25}
            tittle="Pedidos"
            subTittle="Pedidos entregados"
          />
          <OnTopDashboardGrid
            percentage={10}
            quantity={21}
            tittle="Riders"
            subTittle="Disponibles"
          />
          <OnTopDashboardGrid
            percentage={10}
            quantity={21}
            tittle="Historial"
            subTittle="Disponibles"
          />
          <Grid
            item
            sx={{
              padding: "0",
              background: "#1a1d1f",
            }}
            xs={12}
            sm={6}
            lg={2.875}
          ></Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          marginLeft: "1.5rem",
          padding: ".8rem",
          background: "#1a1d1f",
          maxHeight: "35%",
          borderRadius: "10px",
          boxShadow:
            "0px 100px 80px rgb(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222);",
        }}
        xs={12}
        md={5}
      >
        <DoughnutChart></DoughnutChart>
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: "1.5rem",
          padding: ".8rem",
          background: "#1a1d1f",
          maxHeight: "35%",
          borderRadius: "10px",
          boxShadow:
            "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222);",
        }}
        xs={12}
        md={6}
      >
        <BarChart></BarChart>
      </Grid>

      <Grid
        item
        sx={{
          marginLeft: "1.5rem",
          padding: ".8rem",
          background: "#1a1d1f",
          borderRadius: "10px",
          maxHeight: "35%",
          boxShadow:
            "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222);",
        }}
        xs={12}
        md={7}
      >
        <LineChart></LineChart>
      </Grid>

      <Grid
        item
        sx={{
          marginLeft: "1.5rem",
          padding: ".8rem",
          background: "#1a1d1f",
          borderRadius: "10px",
          maxHeight: "35%",
          boxShadow:
            "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222);",
        }}
        xs={12}
        md={4}
      ></Grid>
    </Grid>
  );
};

export default Providers;
