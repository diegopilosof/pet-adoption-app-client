import axios from "axios";
const baseURL = "http://localhost:3002/api/users";
const token = localStorage.getItem("token");
console.log(token);

const loginUser = async (user) => {
  const response = await axios.post(`${baseURL}/login`, user, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
  return response.data;
};

const getLoggedUser = async () => {
  const response = await axios.get(`${baseURL}/loggeduser`, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
  return response.data;
};

const updateProfile = async (user) => {
  console.log("user", user);
  console.log("token", token);
  const response = await axios.put(`${baseURL}/updateprofile`, user, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
};

export default { loginUser, getLoggedUser, updateProfile };
