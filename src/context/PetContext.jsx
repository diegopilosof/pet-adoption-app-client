import React from "react";
import { createContext, useState, useEffect } from "react";
import usersroutes from "../routes/usersroutes";
import petsroutes from "../routes/petsroutes";
import { UserContext } from "./UserContext";
import { useToast } from "@chakra-ui/react";

export const PetContext = createContext();

const PetProvider = ({ children }) => {
  const toast = useToast();
  const [animals, setAnimals] = useState([]);
  const { loggedUser } = React.useContext(UserContext);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [fosteredAnimals, setFosteredAnimals] = useState([]);

  useEffect(() => {
    setFilteredAnimals(
      animals.filter((animal) => animal.wishlist.includes(loggedUser?._id))
    );
  }, [animals, loggedUser]);

  useEffect(() => {
    setFosteredAnimals(
      animals.filter((animal) => animal.fosterUser === loggedUser?._id)
    );
  }, [animals, loggedUser]);

  const getAllPets = async () => {
    try {
      const response = await petsroutes.allPets();
      setAnimals(response);
      // setAnimals(response.slice(0, limit)); // Use slice() to get only the first N pets
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPets();
  }, []);

  const sendAddToWishlist = async (petID, userID, name) => {
    const res = await petsroutes.addToWishlist(petID, userID);
    toast({
      title: "Furry friends incoming!",
      description: `Your wishlist just got an adorable boost. You added ${name}!`,
      status: "success",
      duration: 2000,
      isClosable: true,
      bg: "#7ed957",
      variant: "subtle",
    });
  };

  const deleteFromWishlist = async (petID, userID, name) => {
    console.log(userID, loggedUser.id);
    const res = await petsroutes.deleteFromWishlist(petID, userID);
    console.log(res);
    toast({
      title: "Farewell, furry friend!",
      description: `One less on the wishlist! You've said goodbye to ${name}!`,
      status: "error",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const sendAddToFoster = async (petID, userID, name) => {
    try {
      const res = await petsroutes.addToFoster(petID, userID);
      console.log(res);
      toast({
        title: "New friend comming home!",
        description: `Your heart just found a new furry family member! You've welcomed ${name} into your home!`,
        status: "success",
        duration: 2000,
        isClosable: true,
        bg: "#7ed957",
        variant: "subtle",
      });
    } catch (error) {
      console.log("toast error", error);
      toast({
        title: "Error",
        description: error.response.data.error,
        status: "error",
        duration: 2000,
        isClosable: true,
        bg: "#f56565",
        variant: "subtle",
      });
    }
  };

  const deleteFromFoster = async (petID, userID, name) => {
    const res = await petsroutes.deleteFromFoster(petID, userID);
    console.log(res);
    toast({
      title: "Foster Farewell!",
      description: `You have successfully removed ${name} from your foster list. They will surely find their forever home soon!`,
      status: "error",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const adoptPet = async (petID, userID, name) => {
    const res = await petsroutes.adoptPet(petID, userID);
    console.log(res);
    toast({
      title: "Forever Home Found!",
      description: `Congratulations! ${name} has found their forever home. They will be loved and cherished by their new family. Wishing them a lifetime of happiness! The administrator will get in touch with you soon to arrange the adoption.`,
      status: "success",
      duration: 4000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const returnToShelter = async (petID, userID, name) => {
    const res = await petsroutes.returnToShelter(petID, userID);
    console.log(res);
    toast({
      title: "Farewell, Temporary Companion!",
      description: `We understand that circumstances change, and sometimes it's necessary to return an adopted pet. We appreciate the love and care you provided to ${name}. The administrator will get in touch with you soon to arrange the return.`,
      status: "error",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
    });
  };

  return (
    <PetContext.Provider
      value={{
        sendAddToWishlist,
        getAllPets,
        animals,
        deleteFromWishlist,
        sendAddToFoster,
        deleteFromFoster,
        filteredAnimals,
        fosteredAnimals,
        adoptPet,
        returnToShelter,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default PetProvider;
