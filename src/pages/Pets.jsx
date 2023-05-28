import React, { useEffect, useState } from "react";
import {
  Center,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Switch,
  useDisclosure,
  Collapse,
  Box,
  Select,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import PetCard from "../components/PetCard";
import petsroutes from "../routes/petsroutes";
import fondogatos from "../design/fondo_gatos.jpg";

const Pets = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [animals, setAnimals] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    breed: "",
    adoptionStatus: "",
    name: "",
    size: "",
    age: "",
  });

  const getAllPets = async () => {
    try {
      const response = await petsroutes.allPets();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      setIsLoading(true);
      const animalsFromServer = await getAllPets();
      setAnimals(animalsFromServer);
      setIsLoading(false);
    };
    fetchAnimals();
  }, []);

  const cards =
    !isLoading &&
    animals.map((animal) => {
      return <PetCard key={animal.id} animal={animal} />;
    });

  const handleSearch = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filterPets = async (e) => {
    e.preventDefault();
    getFilteredPets();
  };

  const getFilteredPets = async () => {
    const params = {
      type: filter.type,
      breed: filter.breed,
      adoptionStatus: filter.adoptionStatus,
      name: filter.name,
      size: filter.size,
      age: filter.age,
    };
    try {
      const response = await petsroutes.filterPets(params);
      setFilteredPets(response);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredCards =
    !isLoading &&
    filteredPets.map((animal) => {
      return <PetCard key={animal.id} animal={animal} />;
    });

  return (
    <div>
      <Box>
        <Image
          src={fondogatos}
          alt="logo"
          w="100%"
          h="200px"
          objectFit="cover"
          objectPosition="20% 20%"
          mb={5}
        />
      </Box>
      <Center display="flex" flexDirection="column">
        <Flex flexDirection="column" mt={5} justify="center" align="center">
          <h1>Furry Friends Looking for a family</h1>
          <p>
            Find Your Perfect Pet Match Here! Click on the pets to know them
            better.
          </p>
          <Center gap={5}>
            <Select
              onChange={handleSearch}
              name="type"
              placeholder="Type"
              borderRadius={40}
              color="black"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </Select>
          </Center>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            mt={5}
          >
            <Flex align="center" justify="center">
              <FormLabel htmlFor="advanced-search" mb={5}>
                Advanced search?
              </FormLabel>
              <Switch id="advanced-search" onChange={onToggle} mb={5} />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
              <Box p="10px" color="white" mb={5}>
                <Center>
                  <Flex
                    display="flex"
                    flexDirection={{
                      sm: "column",
                      md: "row",
                      base: "column",
                    }}
                    gap={5}
                  >
                    <Select
                      onChange={handleSearch}
                      name="adoptionStatus"
                      placeholder="Adoption Status"
                      borderRadius={40}
                      color="black"
                    >
                      <option value="available">Available</option>
                      <option value="fostered">Fostered</option>
                      <option value="pending">Pending Adoption</option>
                      <option value="adopted">Adopted</option>
                    </Select>
                    <FormControl>
                      <Input
                        onChange={handleSearch}
                        name="name"
                        placeholder="Name"
                        borderRadius="40"
                        color="black"
                      />
                    </FormControl>
                    <Select
                      onChange={handleSearch}
                      name="size"
                      placeholder="Size"
                      borderRadius={40}
                      color="black"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="extralarge">Extra Large</option>
                    </Select>
                  </Flex>
                </Center>
              </Box>
            </Collapse>
          </FormControl>
        </Flex>
        <Button
          variant="solid"
          bg="#7ED957"
          color="white"
          _hover={{
            bg: "#5ce1e6",
          }}
          borderRadius="40"
          w="200px"
          mb={5}
          onClick={filterPets}
        >
          Search
        </Button>
        <Center bg="#F9F9F9">
          <Flex
            align="center"
            justify="center"
            flexWrap="wrap"
            gap={5}
            bg="white"
          >
            {filteredPets.length > 0 ? filteredCards : cards}
          </Flex>
        </Center>
        <Center bg="#F9F9F9">
          <Flex
            align="center"
            justify="center"
            flexDirection="column"
            flexWrap="wrap"
            mt={10}
          ></Flex>
        </Center>
      </Center>
    </div>
  );
};

export default Pets;
