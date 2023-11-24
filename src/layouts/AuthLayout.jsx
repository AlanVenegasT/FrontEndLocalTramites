import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    //bg-slate-950
    <div className="bg-white"> 
      <Outlet />
    </div>
  );
};

export default AuthLayout;
