import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface PaletteOptions {
    accent?: {
      primary?: string
      light?: string
      hover?: string
      active?: string
    }
    grayscale: {
      dark?: string
      midnight?: string
      night?: string
      oslo?: string
      paper?: string
      metal?: string
    }
  }
}

const theme = createTheme({
  palette: {
    accent: {
      primary: "#6B54FF",
      light: "#B5AAFF",
      hover: "#5C46EC",
      active: "#5C46EC",
    },
    grayscale: {
      dark: "#1A232F",
      midnight: "#1F2939",
      night: "#333B46",
      oslo: "#878C94",
      paper: "#F9FAFB",
      metal: "#647382",
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
