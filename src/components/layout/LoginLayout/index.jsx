import { Outlet, useLocation } from "react-router-dom";
import HeaderForm from "../HeaderForm";

const LoginLayout = () => {
  let location = useLocation().pathname;

  return (
    <>
      <HeaderForm hasBackButton={true} hasIcon={location != '/login'}/>
      <Outlet />
    </>
  );
};

export default LoginLayout;