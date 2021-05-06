import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function PrivateRoute({ ...props }) {
  const { isUserLoggedIn } = useAuth();
  const { path } = { ...props };

  return isUserLoggedIn ? (
    <Route {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );

}
