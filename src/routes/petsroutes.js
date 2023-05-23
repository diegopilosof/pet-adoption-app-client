import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const baseURL = "http://localhost:3002/api/pets";

const allPets = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const specificPet = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

const filterPets = async (filter) => {
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
};
