import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { CountryFilterContextProvider } from "./contexts/CountryFilterContext";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SkeletonTheme } from "react-loading-skeleton";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonTheme baseColor="#222222" highlightColor="#444">
      <ThemeContextProvider>
        <CountryFilterContextProvider>
          <RouterProvider router={router} />
        </CountryFilterContextProvider>
      </ThemeContextProvider>
    </SkeletonTheme>
  </StrictMode>
);
