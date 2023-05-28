import axios from "axios";
const baseURL = `${process.env.REACT_APP_BACKEND_URL}/api/users`;
const token = localStorage.getItem("token");

const createAccount = async (user) => {
  const response = await axios.post(`${baseURL}/createaccount`, user);
  return response.data;
};

const loginUser = async (user) => {
  console.log("user", user);
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

const updateProfile = async (userform) => {
  const response = await axios.put(`${baseURL}/updateprofile`, userform, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
  return response.data;
};

const allUsers = async () => {
  const response = await axios.get(`${baseURL}/allusers`, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
  return response.data;
};

export default {
  loginUser,
  getLoggedUser,
  updateProfile,
  createAccount,
  allUsers,
};
