import React, { useContext } from "react";
import { Box, Image } from "@chakra-ui/react";
import backgrounddog from "../design/backgrounddog.jpg";
import "../App.css";
import { Heading, Center, Flex } from "@chakra-ui/react";
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
        <Flex>
          <Center>
            <Heading className="header-text" fontSize={50}>
              {loggedUser && <Heading>Hello {loggedUser.firstName} </Heading>}
              Unleash the love,
            </Heading>
          </Center>
        </Flex>
        <Heading className="header-text" fontSize={50}>
          adopt a friend.
        </Heading>
      </div>
    </div>
  );
};

export default Header;
