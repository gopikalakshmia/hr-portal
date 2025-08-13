import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children,role }) {
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  if (!loggedInUser ) {
    return <Navigate to="/" replace />;
  }
  if(role && loggedInUser.role !==role)
     return <Navigate to="/" replace />;
  return children;
}
