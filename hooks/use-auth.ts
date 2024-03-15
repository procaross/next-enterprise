import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("csrf_access_token");
    const refreshToken = Cookies.get("csrf_refresh_token");
    setIsAuthenticated(!!accessToken && !!refreshToken);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("csrf_access_token");
    Cookies.remove("csrf_refresh_token");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};