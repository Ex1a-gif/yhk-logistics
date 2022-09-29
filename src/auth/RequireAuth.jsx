import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
