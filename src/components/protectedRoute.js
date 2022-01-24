import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { User } = useUserAuth();

  console.log("Check user in Private: ", User);
  if (!User) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
