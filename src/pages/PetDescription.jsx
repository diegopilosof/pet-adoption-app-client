import React from "react";
import { useLocation, useParams } from "react-router-dom";
import petsroutes from "../routes/petsroutes";
import { useState, useEffect } from "react";
import PetCard from "../components/PetCard";
import {
  Center,
  Flex,
  Heading,
  Box,
  Image,
  Text,
  Stack,
  Button,
  Divider,
  Card,
  CardBody,
  CardFooter,
  Tooltip,
} from "@chakra-ui/react";
import heartgrey from "../design/heartgrey.svg";
import dietary from "../design/dietary.svg";
import hypoallergenic from "../design/hypoallergenic.svg";
import adoptionstatus from "../design/adoptionstatus.svg";
import age from "../design/age.svg";
import size from "../design/size.svg";
import breed from "../design/breed.svg";
import color from "../design/color.svg";
import fostergrey from "../design/fostergrey.svg";
import fostergreen from "../design/fostergreen.svg";
import heartgreen from "../design/heartgreen.svg";
import adoptgrey from "../design/adoptgrey.svg";
import adoptgreen from "../design/adoptgreen.svg";
import { UserContext } from "../context/UserContext";
import { PetContext } from "../context/PetContext";
import { useContext } from "react";

//TODO:image gallery of pets
// TODO: CHANGE HEART TO GREEN WHEN HOVERING AND IF PET IS ADOPTED
//TODO: add a button to adopt the pet
//TODO: add a button to share the pet
//TODO: add a button to see all the pets

const PetDescription = () => {
  const { loggedUser } = useContext(UserContext);
  const {
    sendAddToWishlist,
    animals,
    deleteFromWishlist,
    sendAddToFoster,
    deleteFromFoster,
    filteredAnimals,
    fosteredAnimals,
    adoptPet,
    returnToShelter,
  } = useContext(PetContext);
  const { petId } = useParams();

  const [description, setDescription] = useState([]);

  const getPetDescription = async () => {
    try {
      const response = await petsroutes.specificPet(petId);
      setDescription(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPetDescription();
  }, []);

  return (
    <div>
      {description.map((myPets) => {
        return (
          <div>
            <Center m={10}>
              <Flex flexDirection="Column">
                <Image
                  src={myPets.picture}
                  alt={myPets.name}
                  mb={4}
                  mt={4}
                  borderRadius={40}
                />
                <Center
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex flex={1}>
                    <Flex>
                      <Heading size="md" mb={3}>
                        {myPets.name}
                      </Heading>
                    </Flex>
                    <Flex>
                      {myPets.adopterUser === loggedUser._id ? (
                        <Button variant="ghost">
                          <Image
                            w="40px"
                            src={adoptgreen}
                            onClick={() =>
                              returnToShelter(
                                myPets?._id,
                                loggedUser?._id,
                                myPets?.name
                              )
                            }
                          />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          color="#7ED957"
                          textColor="#7ED957"
                        >
                          <Image
                            w="40px"
                            src={adoptgrey}
                            onClick={() =>
                              adoptPet(
                                myPets?._id,
                                loggedUser?._id,
                                myPets?.name
                              )
                            }
                          />
                        </Button>
                      )}
                      {myPets.fosterUser === loggedUser._id ? (
                        <Button variant="ghost" color="#7ED957">
                          <Image
                            w="40px"
                            src={fostergreen}
                            onClick={() =>
                              deleteFromFoster(
                                myPets?._id,
                                loggedUser?._id,
                                myPets?.name
                              )
                            }
                          />
                        </Button>
                      ) : (
                        <Button variant="ghost" color="#7ED957">
                          <Image
                            w="40px"
                            src={fostergrey}
                            onClick={() =>
                              sendAddToFoster(
                                myPets?._id,
                                loggedUser?._id,
                                myPets?.name
                              )
                            }
                          />
                        </Button>
                      )}
                      {myPets.wishlist.includes(loggedUser._id) ? (
                        <Button variant="ghost" color="#7ED957">
                          <Image
                            w="40px"
                            src={heartgreen}
                            onClick={() =>
                              deleteFromWishlist(
                                myPets?._id,
                                loggedUser?._id,
                                myPets?.name
                              )
                            }
                          />
                        </Button>
                      ) : (
                        <Button variant="ghost" color="#7ED957">
                          <Image
                            w="40px"
                            src={heartgrey}
                            onClick={() =>
                              sendAddToWishlist(
                                myPets?._id,
                                loggedUser?._id,
                                myPets?.name
                              )
                            }
                          />
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                </Center>
                <Divider />
                <Heading size="md" mb={3}>
                  About {myPets.name}
                </Heading>
                <Text mb={4}>{myPets.bio}</Text>
                <Divider />
                <Heading size="md" mb={3}>
                  Details
                </Heading>
                <Center>
                  <Flex align="center" justify="center" flexWrap="wrap" gap={5}>
                    <Center>
                      <Card w={200}>
                        <CardBody align="center" justify="center">
                          <Image w="40px" src={age} />
                          <Text fontWeight="bold">Age</Text>
                          <Text>
                            {myPets.age} {myPets.age === 1 ? "year" : "years"}{" "}
                            old
                          </Text>
                        </CardBody>
                      </Card>
                    </Center>
                    <Card w={200}>
                      <CardBody align="center" justify="center">
                        <Image w="40px" src={size} />
                        <Text fontWeight="bold">Size</Text>
                        <Text>{myPets.height} </Text>
                      </CardBody>
                    </Card>
                    <Card w={200}>
                      <CardBody align="center" justify="center">
                        <Image w="40px" src={breed} />
                        <Text fontWeight="bold">Breed</Text>
                        <Text>{myPets.breed} </Text>
                      </CardBody>
                    </Card>
                    <Card w={200}>
                      <CardBody align="center" justify="center">
                        <Image w="40px" src={color} />
                        <Text fontWeight="bold">Color</Text>
                        <Text>{myPets.color} </Text>
                      </CardBody>
                    </Card>
                    <Card w={200}>
                      <CardBody align="center" justify="center">
                        <Image w="40px" src={hypoallergenic} />
                        <Text fontWeight="bold">Hypoallergenic</Text>
                        <Text>{myPets.hypoallergenic ? "Yes" : "No"}</Text>
                      </CardBody>
                    </Card>
                    <Card w={200}>
                      <CardBody align="center" justify="center">
                        <Image w="40px" src={dietary} />
                        <Text fontWeight="bold">Dietary Restrictions</Text>
                        <Text>{myPets.dietaryRestrictions}</Text>
                      </CardBody>
                    </Card>
                    <Card w={200}>
                      <CardBody align="center" justify="center">
                        <Image w="40px" src={adoptionstatus} />
                        <Text fontWeight="bold">Adoption Status</Text>
                        <Text>{myPets.adoptionStatus}</Text>
                      </CardBody>
                    </Card>
                  </Flex>
                </Center>
                <Divider />
              </Flex>
            </Center>
          </div>
        );
      })}
    </div>
  );
};

export default PetDescription;
