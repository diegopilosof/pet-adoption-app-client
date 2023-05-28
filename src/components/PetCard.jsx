import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react";
import heartgrey from "../design/heartgrey.svg";
import heartgreen from "../design/heartgreen.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PetContext } from "../context/PetContext";
import fostergrey from "../design/fostergrey.svg";
import fostergreen from "../design/fostergreen.svg";

const PetCard = ({ animal }) => {
  const { loggedUser } = useContext(UserContext);
  const {
    sendAddToWishlist,
    deleteFromWishlist,
    sendAddToFoster,
    deleteFromFoster,
  } = useContext(PetContext);

  let navigate = useNavigate();
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    if (animal) {
      setMyPets(animal);
    }
  }, [animal]);

  const petDesc = () => {
    navigate(`/pets/${myPets?._id}`);
  };

  return (
    <Card w={270} h={450}>
      <CardBody>
        <Image
          src={myPets.picture}
          alt={myPets.name}
          borderRadius="lg"
          w="100%"
          h="200px"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{myPets.name}</Heading>
          <Text>{myPets.breed}</Text>
          {myPets.adoptedUser ? (
            <Tag colorScheme="teal" w="80px">
              Adopted
            </Tag>
          ) : myPets.fosterUser ? (
            <Tag colorScheme="yellow" w="80px">
              Fostered
            </Tag>
          ) : (
            <Tag colorScheme="green" w="80px">
              Available
            </Tag>
          )}
        </Stack>
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          variant="solid"
          bg="#7ED957"
          color="white"
          _hover={{
            bg: "#5ce1e6",
          }}
          onClick={petDesc}
        >
          See more
        </Button>
        {myPets.fosterUser === loggedUser?._id && loggedUser ? (
          <Button variant="ghost" color="#7ED957">
            <Image
              w="40px"
              src={fostergreen}
              onClick={() =>
                deleteFromFoster(myPets?._id, loggedUser?._id, myPets?.name)
              }
            />
          </Button>
        ) : (
          <Button variant="ghost" color="#7ED957">
            <Image
              w="40px"
              src={fostergrey}
              onClick={() =>
                sendAddToFoster(myPets?._id, loggedUser?._id, myPets?.name)
              }
            />
          </Button>
        )}
        {animal?.wishlist && animal.wishlist.includes(loggedUser?._id) ? (
          <Button variant="ghost" color="#7ED957">
            <Image
              w="40px"
              src={heartgreen}
              onClick={() =>
                deleteFromWishlist(myPets?._id, loggedUser?._id, myPets?.name)
              }
            />
          </Button>
        ) : (
          <Button variant="ghost" color="#7ED957">
            <Image
              w="40px"
              src={heartgrey}
              onClick={() =>
                sendAddToWishlist(myPets?._id, loggedUser?._id, myPets?.name)
              }
            />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PetCard;
