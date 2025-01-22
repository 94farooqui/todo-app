import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import verifyToken from "../lib/verifyToken";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    const getAuthDetails = async () => {
            const storedToken = localStorage.getItem("token");

            if (!storedToken) {
              setAuthLoading(false);
              setUser(null);
              console.log("no user");
            } else {
              setToken(storedToken);
              const response = await verifyToken(token);
              setAuthLoading(false);
              setUser(response.data.user);
            }
    }

    getAuthDetails()

  }, [user, token]);
  return (
    <AuthContext.Provider value={{ user, authLoading, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
