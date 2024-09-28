import { Outlet, useLocation } from "react-router-dom";
import HeaderFrom from "../HeaderForm";

const LoginLayout = () => {
  let location = useLocation().pathname;

  return (
    <>
      <HeaderFrom hasBackButton={true} hasIcon={location != '/login'}/>
      <Outlet />
    </>
  );
};

export default LoginLayout;