import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import verifyToken from "../lib/verifyToken";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [token,setToken] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    const getAuthDetails = async (storedToken) => {
      
      try {
        const userDetails = await verifyToken(storedToken);
        setUser(userDetails);
      } catch (error) {
        console.log(error);
      } finally {
      }
      setAuthLoading(false);
    };

    if (storedToken) {
      setToken(storedToken)
      
      setAuthLoading(true);
      getAuthDetails(storedToken);
    } else {
      setAuthLoading(false);
      console.log("no user");
    }

    // if (!storedToken) {
    //   setAuthLoading(false);
    //   console.log("no user");
    // } else {
    //   getAuthDetails(storedToken);
    // }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token)
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, authLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
