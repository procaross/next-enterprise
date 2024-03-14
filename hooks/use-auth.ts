// @ts-ignore
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("access_token_cookie");
    const refreshToken = Cookies.get("refresh_token_cookie");
    console.log(refreshToken)
    setIsAuthenticated(!!accessToken && !!refreshToken);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("access_token_cookie");
    Cookies.remove("refresh_token_cookie");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};