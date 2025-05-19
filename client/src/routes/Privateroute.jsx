import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContex";

const PrivateRoute = ({ children }) => {

  const {user, loading } = useContext(StoreContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
export default PrivateRoute;
