import axios from "axios";

const verifyToken = async (token) => {

 
  const response = await axios.get(
    "http://localhost:3000/api/auth/verifyUser",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status == 200) {
    
    return response.data
  }
};


export default verifyToken