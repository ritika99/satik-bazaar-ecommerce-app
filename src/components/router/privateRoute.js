import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function PrivateRoute({...props}) {
  const {isUserLoggedIn} = useAuth();
  return (isUserLoggedIn ? <Route {...props} /> : <Navigate replace to="/login" />)
}