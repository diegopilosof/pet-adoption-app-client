import React from "react";
import {
  Flex,
  Center,
  Heading,
  TabPanel,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import PetCard from "../components/PetCard";
import petsroutes from "../routes/petsroutes";
import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { PetContext } from "../context/PetContext";

const Mypets = () => {
  const { loggedUser } = React.useContext(UserContext);
  const { animals } = React.useContext(PetContext);

  console.log(loggedUser);

  return (
    <div>
      <Center display="flex" flexDirection="column">
        <Flex
          flexDirection="column"
          mt={10}
          justify="center"
          align="center"
          border="1px solid grey"
          p={10}
          borderRadius="40"
          borderColor="#CBD5E0"
        >
          <Heading>My Pet Journey</Heading>
          <p>
            Tracking Your Wishlist, Fostering Journey, and Adoption Milestones
          </p>
          <Center>
            <Tabs variant="soft-rounded" colorScheme="green" mt={5}>
              <Center>
                <TabList>
                  <Tab>Wishlist</Tab>
                  <Tab>Fostered</Tab>
                  <Tab>Adopted</Tab>
                </TabList>
              </Center>
              <TabPanels>
                <TabPanel>
                  {animals.filter((animal) =>
                    animal.wishlist.includes(loggedUser?._id)
                  ).length === 0 ? (
                    <Text
                      textAlign="center"
                      fontSize="xl"
                      fontWeight="bold"
                      mt={5}
                    >
                      You don't have any pets in your wishlist yet!
                    </Text>
                  ) : (
                    <Flex
                      align="center"
                      justify="center"
                      flexWrap="wrap"
                      gap={5}
                    >
                      {animals
                        .filter((animal) =>
                          animal.wishlist.includes(loggedUser?._id)
                        )
                        .map((animal) => (
                          <PetCard key={animal?._id} animal={animal} />
                        ))}
                    </Flex>
                  )}
                </TabPanel>

                <TabPanel>
                  {animals.filter(
                    (animal) => animal.fosterUser === loggedUser?._id
                  ).length === 0 ? (
                    <Text
                      textAlign="center"
                      fontSize="xl"
                      fontWeight="bold"
                      mt={5}
                    >
                      No fostered friends!
                    </Text>
                  ) : (
                    <Flex
                      align="center"
                      justify="center"
                      flexWrap="wrap"
                      gap={5}
                    >
                      {animals
                        .filter(
                          (animal) => animal.fosterUser === loggedUser?._id
                        )
                        .map((animal) => (
                          <PetCard key={animal?._id} animal={animal} />
                        ))}
                    </Flex>
                  )}
                </TabPanel>
                <TabPanel>
                  {animals.filter(
                    (animal) => animal.adopterUser === loggedUser?._id
                  ).length === 0 ? (
                    <Text
                      textAlign="center"
                      fontSize="xl"
                      fontWeight="bold"
                      mt={5}
                    >
                      You don't have any adopted pets!
                    </Text>
                  ) : (
                    <Flex
                      align="center"
                      justify="center"
                      flexWrap="wrap"
                      gap={5}
                    >
                      {animals
                        .filter(
                          (animal) => animal.adopterUser === loggedUser?._id
                        )
                        .map((animal) => (
                          <PetCard key={animal?._id} animal={animal} />
                        ))}
                    </Flex>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Flex>
      </Center>
    </div>
  );
};

export default Mypets;