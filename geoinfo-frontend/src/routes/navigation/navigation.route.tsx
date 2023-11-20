import NavBar from "../../components/navbar/navbar.component";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Navigation;