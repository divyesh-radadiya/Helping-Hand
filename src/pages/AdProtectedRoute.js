import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const AdProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user || user["uid"] != "8tQOXNnJuIg7PZ5hzWe5jGehBSY2") {
    return <Navigate to="/adminphonesignup" />;
  }

  return children;
};

export default AdProtectedRoute;
