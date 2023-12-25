import React, { Fragment } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader/Loader";

const ProtectedRoute = (props) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return loading ? <Loader /> : <Navigate replace to="/" />;
  }
  if (props.isAdmin === "true" && user.role !== "admin")
    return loading ? <Loader /> : <Navigate replace to="/" />;
  else return loading ? <Loader /> : <Outlet />;
};

export default ProtectedRoute;
