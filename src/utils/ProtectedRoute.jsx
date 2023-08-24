import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"; 

export const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};