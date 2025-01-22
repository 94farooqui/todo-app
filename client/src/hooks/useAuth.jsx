import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { setToken } = useContext(AuthContext);

  const login = async (formData) => {
    console.log("From Cutsom hook", formData);
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData
    );
    if (response.status == 200) {
      console.log("Token: ",response.data);
      const receivedToken = response.data;
      localStorage.setItem("token", receivedToken)
      setToken(receivedToken);
    }
  };

  const signup = async (formData) => {
    const response = await axios.post("http://localhost:3000/api/auth/signup");
  };

  return { login, signup };
};

export default useAuth;
