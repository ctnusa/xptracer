import { Navigate, Outlet } from "react-router";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useAppDispatch } from "@/app/hooks";
import { fetchMeAsync } from "@/features/user/userThunks";

const ProtectedRoutes = () => {
  const dispatch = useAppDispatch();

  let isAuthenticated;
  const token = localStorage.getItem("token");
  if (!token) {
    isAuthenticated = false;
  } else {
    const { exp: expirationTimeInSec }: JwtPayload = jwtDecode(token);
    const currentTimeInSec = Date.now() / 1000;
    isAuthenticated = currentTimeInSec < expirationTimeInSec!!;

    if (isAuthenticated) {
      dispatch(fetchMeAsync());
    }
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
