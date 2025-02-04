import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;