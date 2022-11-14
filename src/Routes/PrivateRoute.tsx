import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
type IsPrivateRoute = {
  children: any;
  path: string;
  exact: boolean;
  redirectPath?: string;
  push?: boolean;
};

function PrivateRoute({ children }: IsPrivateRoute) {
  const { isAuth } = useSelector((state: any) => state?.login);
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
