import { Outlet } from "react-router-dom";
import HeaderFrom from "../HeaderForm";

const LoginLayout = () => {
  return (
    <>
      <HeaderFrom hasBackButton={true}/>
      <Outlet />
    </>
  );
};

export default LoginLayout;