import { createBrowserRouter, RouteObject } from "react-router";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Layout from "./pages/Layout";

export const routeDefinitions = {
  root: {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/countryDetails/:countryName", element: <CountryDetails /> },
    ],
  },
};

export const routes: RouteObject[] = [routeDefinitions.root];
export const router = createBrowserRouter(routes);
