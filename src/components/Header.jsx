import React, { useContext } from "react";
import { Box, Image } from "@chakra-ui/react";
import backgrounddog from "../design/backgrounddog.jpg";
import "../App.css";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { loggedUser } = useContext(UserContext);

  return (
    <div>
      <Box
        style={{
          position: "relative",
        }}
      >
        <Image src={backgrounddog} objectFit="cover" w="100%" height="550px" />
      </Box>
      <div className="header-box">
        <Heading className="header-text" fontSize={50}>
          {loggedUser && <Heading>Hello {loggedUser.name} </Heading>}
          Unleash the love,
        </Heading>
        <Heading className="header-text" fontSize={80}>
          adopt a friend.
        </Heading>
      </div>
    </div>
  );
};

export default Header;
