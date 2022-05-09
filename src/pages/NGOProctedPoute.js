import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const NGOProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  // user.getIdToken(true).then((idToken) => console.log(idToken));
  console.log(user);
  if (!user) {
    return <Navigate to="/emailsignin" />;
  }

  return children;
};

export default NGOProtectedRoute;
