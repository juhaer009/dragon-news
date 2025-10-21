import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
const location = useLocation();
// console.log(location)

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;
