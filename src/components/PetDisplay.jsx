import React, { useEffect, useState } from "react";
import { Center, Flex } from "@chakra-ui/react";
import paw from "../design/paw.svg";
import { Image, Heading, Button } from "@chakra-ui/react";
import PetCard from "./PetCard";
import petsroutes from "../routes/petsroutes";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PetContext } from "../context/PetContext";

const PetDisplay = () => {
  const { loggedUser } = React.useContext(UserContext);
  const { animals } = React.useContext(PetContext);

  return (
    <div>
      <Center Flex flexDirection="column" bg="#F9F9F9" mb={5}>
        <Center bg="#F9F9F9">
          <Heading mt={5}> Purrfectly Available! </Heading>
        </Center>
        <Center bg="#F9F9F9">
          <Heading size="md" mb={10}>
            Cats and Dogs Looking for Their Forever Home &hearts;
          </Heading>
        </Center>
        <Center bg="#F9F9F9">
          <Flex align="center" justify="center" flexWrap="wrap" gap={5}>
            {animals.map((animal) => {
              return <PetCard key={animal.id} animal={animal} />;
            })}
          </Flex>
        </Center>
        <Center mt={5} mb={5}>
          <a href="/pets">
            <Button
              variant="solid"
              bg="#7ED957"
              color="white"
              _hover={{
                bg: "#5ce1e6",
              }}
            >
              See All Available Pets
            </Button>
          </a>
        </Center>
      </Center>
    </div>
  );
};

export default PetDisplay;
