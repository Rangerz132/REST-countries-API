import Header from "../components/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
