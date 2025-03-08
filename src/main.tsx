import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { CountryFilterContextProvider } from "./contexts/CountryFilterContext";
import { RouterProvider } from "react-router";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CountryFilterContextProvider>
        <RouterProvider router={router} />
      </CountryFilterContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
