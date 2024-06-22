import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import UnderlineLink from "./components/UnderlineLink";
import viteLogo from "../public/vite.svg";
import CustomizedInputBase from "./components/CustomizedInputBase";
import { Box, Button, PaletteMode, Stack, Container } from "@mui/material";
import React from "react";
import {
  amber,
  blueGrey,
  brown,
  deepOrange,
  green,
  grey,
  indigo,
  orange,
  red,
} from "@mui/material/colors";
import SwiperComponent from "./components/SwiperComponent";
import { Products } from "./components/Products";

import image4 from "./assets/images/WALLPAPER OMEGA (28).jpg";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: indigo,
          divider: indigo[900],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: indigo[900],
            paper: grey[500],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[900],
          text: {
            primary: grey[500],
            secondary: grey[500],
          },
          background: {
            default: grey[500],
            paper: indigo[900],
          },
        }),
  },
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            border: "5px red",
            zIndex: 9999,
          }}
        >
          <Stack
            spacing={60}
            direction="row"
            sx={{
              bgcolor: "black",
              height: "50px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={viteLogo}
              alt="Image enterprise"
              style={{ paddingLeft: 20 }}
            />
            <CustomizedInputBase />
            <Button
              sx={{
                bgcolor: "red",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() =>
                setMode((prevMode: PaletteMode) =>
                  prevMode === "light" ? "dark" : "light"
                )
              }
            ></Button>
          </Stack>
          <ResponsiveAppBar />
        </header>
        <aside style={{ paddingTop: 104 }}>
          <SwiperComponent />
        </aside>

        <Container
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Products
            category={{
              id: 2,
              denomination: "Todos los productos",
              icon: viteLogo,
              image: image4,
            }}
          />
          <div style={{ height: "800px", backgroundColor: "aqua" }}></div>
        </Container>
        <div style={{ height: "800px", backgroundColor: "red" }}></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
