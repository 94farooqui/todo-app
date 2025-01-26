import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS

const useAuth = () => {
  const { setToken } = useContext(AuthContext);

  const userLogin = async (formData) => {
    console.log("From Cutsom hook", formData);
    const response = await axios.post(
      `${serverAddress}/api/auth/login`,
      formData
    );
    if (response.status == 200) {
      console.log("Token: ",response.data);
      return response.data
    }
  };

  const userSignup = async (formData) => {
    const response = await axios.post( `${serverAddress}/api/auth/signup`, formData);
        if (response.status == 200) {
          console.log("Token: ", response.data);
          return response.data;
        }
  };

  return { userLogin, userSignup };
};

export default useAuth;
