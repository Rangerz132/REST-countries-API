import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { CountryFilterContextProvider } from "./contexts/CountryFilterContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CountryFilterContextProvider>
        <Home />
      </CountryFilterContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
