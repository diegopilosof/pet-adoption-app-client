import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
} from "@chakra-ui/react";
import fondocachorros from "../design/fondo_cachorros.jpg";
import usersroutes from "../routes/usersroutes";
import { PetContext } from "../context/PetContext";
import edit from "../design/edit.svg";
import { useNavigate } from "react-router-dom";

const ManagePets = () => {
  const [users, setUsers] = useState([]);
  const { animals } = useContext(PetContext);
  let navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const response = await usersroutes.allUsers();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromServer = await getAllUsers();
      setUsers(usersFromServer);
    };
    fetchUsers();
  }, []);

  const editPet = (animalId) => {
    navigate(`/managepets/${animalId}`);
  };

  return (
    <div>
      <Box>
        <Image
          src={fondocachorros}
          alt="logo"
          w="100%"
          h="200px"
          objectFit="cover"
          objectPosition="28% 28%"
          mb={5}
        />
      </Box>
      <Center flexDirection="column" mb={5}>
        <Center>
          <Heading mt={5}>Manage Pets</Heading>
        </Center>
        <Center px={20} textAlign="center">
          <Text size="md" mb={5}>
            The "Manage Pets" section offers administrators a comprehensive set
            of tools to effectively oversee and manage pets within the platform.
            This section provides a centralized hub where administrators can
            efficiently handle various aspects of pet management.
          </Text>
        </Center>
        <Center>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Pet Name</Th>
                  <Th>Type and breed</Th>
                  <Th>Fostered by</Th>
                  <Th>Adopted by</Th>
                  <Th>Edit pet</Th>
                </Tr>
              </Thead>
              <Tbody>
                {animals.map((animal) => {
                  const fosterUser = users.find(
                    (user) => user._id === animal.fosterUser
                  );
                  const adopterUser = users.find(
                    (user) => user._id === animal.adopterUser
                  );
                  return (
                    <Tr key={animal._id}>
                      <Td fontSize="small">{animal.name}</Td>
                      <Td fontSize="small">
                        {animal.type} - {animal.breed}
                      </Td>
                      <Td fontSize="small">
                        {animal.fosterUser
                          ? `${fosterUser?.firstName} ${fosterUser?.lastName}`
                          : "-"}
                      </Td>
                      <Td fontSize="small">
                        {animal.adopterUser
                          ? `${fosterUser?.firstName} ${fosterUser?.lastName}`
                          : "-"}
                      </Td>
                      <Td fontSize="small">
                        <Button
                          variant="ghost"
                          color="#7ED957"
                          _hover={{
                            bg: "transparent",
                          }}
                          onClick={() => editPet(animal._id)}
                        >
                          <Image w="20px" src={edit} />
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Center>
    </div>
  );
};

export default ManagePets;
