import "../../styles/globals.css";
import type { AppProps } from "next/app";
import ResponsiveDrawer from "../modules/sideBar/sideBar";
import Box from "@mui/material/Box";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer></ResponsiveDrawer>
      <Component {...pageProps} />
    </Box>
  );
}

export default MyApp;
