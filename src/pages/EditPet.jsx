import React from "react";
import { useParams } from "react-router-dom";
import petsroutes from "../routes/petsroutes";
import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Center,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  WrapItem,
  Avatar,
  Flex,
  useToast,
  Textarea,
  Tooltip,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import perrito from "../design/perrito_palo.jpg";

const EditPet = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({
    name: "",
    type: "",
    adoptionStatus: "",
    breed: "",
    size: "",
    age: "",
    description: "",
    picture: "",
    dietaryRestrictions: "",
    hypoallergenic: "",
    bio: "",
    color: "",
  });
  const toast = useToast();

  const getPetDescription = async () => {
    try {
      const response = await petsroutes.specificPet(petId);
      setPet(response[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPetDescription();
  }, []);

  const handlePet = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
    console.log(pet);
  };

  const handlePicture = (e) => {
    setPet({ ...pet, picture: e.target.files[0] });
    console.log(pet);
    console.log(e.target.files[0]);
  };

  const editPet = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", pet.name);
    form.append("type", pet.type);
    form.append("adoptionStatus", pet.adoptionStatus);
    form.append("breed", pet.breed);
    form.append("size", pet.size);
    form.append("age", pet.age);
    form.append("description", pet.description);
    form.append("picture", pet.picture);
    form.append("dietaryRestrictions", pet.dietaryRestrictions);
    form.append("hypoallergenic", pet.hypoallergenic);
    form.append("bio", pet.bio);
    form.append("color", pet.color);

    try {
      const response = await petsroutes.editPet(pet, form);
      console.log(response);
      toast({
        title: "Pet Edited",
        description: "Pet has been edited successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Pet has not been edited",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box>
        <Image
          src={perrito}
          alt="logo"
          w="100%"
          h="200px"
          objectFit="cover"
          objectPosition="50% 50%"
          mb={5}
        />
      </Box>
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
          <Heading>Edit Pet</Heading>
          <p>Paws-itively Adorable: Customize Your Pet's Perfect Profile</p>
          <WrapItem>
            <Avatar size="2xl" name="" src={pet?.picture} mb={5} />
          </WrapItem>
          <FormControl>
            <Center>
              <FormLabel>Picture</FormLabel>
            </Center>
            <Input
              name="picture"
              placeholder="Profile Picture"
              borderRadius="40"
              color="black"
              type="file"
              mb={5}
              onChange={handlePicture}
            />
          </FormControl>
          <FormControl>
            <Center>
              <FormLabel>Name</FormLabel>
            </Center>
            <Input
              name="name"
              borderRadius="40"
              color="black"
              value={pet?.name}
              mb={5}
              placeholder="Name"
              onChange={handlePet}
              isRequired={true}
            />
          </FormControl>
          <FormControl>
            <Center>
              <FormLabel>Type</FormLabel>
            </Center>
            <Select
              name="type"
              placeholder="Type"
              borderRadius={40}
              color="black"
              mb={5}
              value={pet?.type}
              onChange={handlePet}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl>
            <Center>
              <FormLabel>Adoption Status</FormLabel>
            </Center>
            <Select
              name="adoptionStatus"
              placeholder="Adoption Status"
              borderRadius={40}
              color="black"
              mb={5}
              value={pet?.adoptionStatus}
              onChange={handlePet}
            >
              <option value="available">Available</option>
              <option value="fostered">Fostered</option>
              <option value="pending">Pending Adoption</option>
              <option value="adopted">Adopted</option>
            </Select>
          </FormControl>
          <FormControl>
            <Center>
              <Tooltip
                label="Consider the size compared to other animals of its type"
                placement="auto-start"
              >
                <FormLabel>Size</FormLabel>
              </Tooltip>
            </Center>
            <Select
              name="size"
              placeholder="Size"
              borderRadius={40}
              color="black"
              mb={5}
              value={pet?.size}
              onChange={handlePet}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extralarge">Extra Large</option>
            </Select>
          </FormControl>
          <FormControl>
            <Center>
              <FormLabel>Breed</FormLabel>
            </Center>
            <Input
              name="breed"
              placeholder="Breed"
              borderRadius="40"
              color="black"
              mb={5}
              value={pet?.breed}
              onChange={handlePet}
            />
          </FormControl>
          <FormControl>
            <Center>
              <Tooltip
                label="If it has more than one color, you can include it"
                placement="auto-start"
              >
                <FormLabel>Color</FormLabel>
              </Tooltip>
            </Center>
            <Input
              name="color"
              placeholder="Color"
              borderRadius="40"
              color="black"
              mb={5}
              value={pet?.color}
              onChange={handlePet}
            />
          </FormControl>
          <FormControl>
            <Center>
              <Tooltip
                label="Likeliness of an animal to cause allergies"
                placement="auto-start"
              >
                <FormLabel>Hypoallergenic</FormLabel>
              </Tooltip>
            </Center>
            <RadioGroup mb={5}>
              <Stack>
                <Radio
                  name="hypoallergenic"
                  value={pet?.hypoallergenic}
                  onChange={handlePet}
                >
                  Yes
                </Radio>
                <Radio name="hypoallergenic" value="no" onChange={handlePet}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <Center>
              <FormLabel>Age</FormLabel>
            </Center>
            <Input
              name="age"
              placeholder="Age"
              borderRadius="40"
              color="black"
              type="number"
              mb={5}
              value={pet?.age}
              onChange={handlePet}
            />
          </FormControl>
          <FormControl>
            <Center>
              <Tooltip
                label="Inlcude: introduction, physical description, background and history, personality, health and care, hobbies and interests"
                placement="auto-start"
              >
                <FormLabel mb={5}>Biography</FormLabel>
              </Tooltip>
            </Center>
            <Textarea
              placeholder="Biography"
              size="md"
              mb={5}
              value={pet?.bio}
              onChange={handlePet}
              name="bio"
            />
          </FormControl>
          <FormControl>
            <Center>
              <Tooltip
                label="Include allergies, restricted ingredients, medications, feeding guidelines, etc."
                placement="auto-start"
              >
                <FormLabel>Dietary Restrictions</FormLabel>
              </Tooltip>
            </Center>
            <Textarea
              placeholder="List of dietary restrictions"
              size="md"
              value={pet?.dietaryRestrictions}
              onChange={handlePet}
              name="dietaryRestrictions"
            />
          </FormControl>
          <Button
            variant="solid"
            bg="#7ED957"
            color="white"
            _hover={{
              bg: "#5ce1e6",
            }}
            mt={5}
            onClick={editPet}
          >
            Save Changes
          </Button>
        </Flex>
      </Center>
    </div>
  );
};

export default EditPet;
