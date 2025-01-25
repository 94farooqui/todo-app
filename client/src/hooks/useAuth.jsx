import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { setToken } = useContext(AuthContext);

  const userLogin = async (formData) => {
    console.log("From Cutsom hook", formData);
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData
    );
    if (response.status == 200) {
      console.log("Token: ",response.data);
      return response.data
    }
  };

  const userSignup = async (formData) => {
    const response = await axios.post("http://localhost:3000/api/auth/signup", formData);
        if (response.status == 200) {
          console.log("Token: ", response.data);
          return response.data;
        }
  };

  return { userLogin, userSignup };
};

export default useAuth;
