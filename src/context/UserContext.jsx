import React, { useEffect } from "react";
import { createContext, useState } from "react";
import usersroutes from "../routes/usersroutes";
import { useToast } from "@chakra-ui/react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const toast = useToast();
  const [loggedUser, setLoggedUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      usersroutes.getLoggedUser().then((res) => {
        setLoggedUser(res.user);
      });
    }
  }, []);

  const handleLoginSubmit = async (userLogin) => {
    console.log(userLogin);
    console.log("login");
    try {
      const res = await usersroutes.loginUser(userLogin);
      localStorage.setItem("token", res.token);
      setLoggedUser(res.payload);
      toast({
        title: "Pawsome login!",
        description: "Let's find your furry match!",
        status: "success",
        duration: 2000,
        isClosable: true,
        bg: "#7ed957",
        variant: "subtle",
      });
    } catch (error) {
      toast({
        title: "Houston, we have a problem...",
        description: `Please PAWS and Try Again! ${error.response.data.error}`,
        status: "error",
        duration: 2000,
        isClosable: true,
        variant: "subtle",
      });
    }
  };

  const handleUpdateProfile = async (user) => {
    setLoggedUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        handleLoginSubmit,
        isLogged,
        setIsLogged,
        handleLogout,
        handleUpdateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
