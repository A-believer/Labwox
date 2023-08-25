import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"; 

export const ProtectedRoute = ({ children }) => {
  const { currentUser } = UserAuth();
  const nav = useNavigate()
  if (!currentUser) {
    // user is not authenticated
   nav("/login")
  }
  return children;
};