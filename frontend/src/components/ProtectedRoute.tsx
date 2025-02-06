import { Navigate, Outlet } from "react-router";
import { jwtDecode, JwtPayload } from "jwt-decode";

const ProtectedRoutes = () => {
  let isAuthenticated;
  const token = localStorage.getItem('token')
  if (!token) {
    isAuthenticated = false;
  } else {
    const {exp: expirationTimeInSec}: JwtPayload = jwtDecode(token);
    const currentTimeInSec = Date.now() / 1000;
    isAuthenticated = currentTimeInSec < expirationTimeInSec!!;
  }

  return isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;
