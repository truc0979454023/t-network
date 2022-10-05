import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const firstLogin = localStorage.getItem("firstLogin");
  return firstLogin ? element : <Navigate to="/" />;
};

export default PrivateRoute;
