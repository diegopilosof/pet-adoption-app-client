import axios from "axios";
const token = localStorage.getItem("token");

const baseURL = `${process.env.REACT_APP_BACKEND_URL}/api/pets`;

const allPets = async () => {
  const response = await axios.get(`${baseURL}/pets`);
  return response.data;
};

const specificPet = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

const filterPets = async (filter) => {
  console.log(filter);
  const response = await axios.post(`${baseURL}/filter/`, filter);
  return response.data;
};

const addToWishlist = async (petID, userID) => {
  const response = axios.patch(`${baseURL}/addtowishlist/`, {
    petID,
    userID,
  });
  return response.data;
};

const wishlistPets = async (petID, userID) => {
  const response = axios.get(`${baseURL}/wishlistpets/`, {
    petID,
    userID,
  });
  return response.data;
};

const deleteFromWishlist = async (petID, userID) => {
  console.log(petID, userID);
  const response = axios.patch(`${baseURL}/deletewishlist/`, {
    petID,
    userID,
  });
  return response.data;
};

const addToFoster = async (petID, userID) => {
  const response = axios.patch(`${baseURL}/addtofoster/`, {
    petID,
    userID,
  });
  return response.data;
};

const deleteFromFoster = async (petID, userID) => {
  const response = axios.patch(`${baseURL}/deletefoster/`, {
    petID,
    userID,
  });
  return response.data;
};

const adoptPet = async (petID, userID) => {
  const response = axios.patch(`${baseURL}/adoptpet/`, {
    petID,
    userID,
  });
  return response.data;
};

const returnToShelter = async (petID, userID) => {
  const response = axios.patch(`${baseURL}/returnpet/`, {
    petID,
    userID,
  });
  return response.data;
};

const addPet = async (pet) => {
  console.log(token);
  const response = await axios.post(`${baseURL}/addpet`, pet, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
  return response.data;
};

const editPet = async (pet) => {
  console.log(pet);
  const response = await axios.put(`${baseURL}/editpet`, pet, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  });
  return response.data;
};

export default {
  allPets,
  specificPet,
  filterPets,
  addToWishlist,
  wishlistPets,
  deleteFromWishlist,
  addToFoster,
  deleteFromFoster,
  adoptPet,
  returnToShelter,
  addPet,
  editPet,
};
