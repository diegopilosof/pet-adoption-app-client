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
} from "@chakra-ui/react";
import fondocachorros from "../design/fondo_cachorros.jpg";
import usersroutes from "../routes/usersroutes";
import { PetContext } from "../context/PetContext";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const { animals } = useContext(PetContext);

  console.log(animals);

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
      console.log(users);
    };
    fetchUsers();
  }, []);

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
          <Heading mt={5}>Manage Users</Heading>
        </Center>
        <Center px={20} textAlign="center">
          <Text size="md" mb={5}>
            The "Manage Users" section allows administrators to oversee and
            handle user accounts efficiently. It provides a user list with
            essential details for quick reference and facilitates tasks such as
            enabling or disabling accounts, updating user information, and
            managing adoption statuses.
          </Text>
        </Center>
        <Center>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>User</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Fostered Pets</Th>
                  <Th>Adopted Pets</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr key={user.id}>
                    <Td fontSize="small">
                      {user.firstName} {user.lastName}
                    </Td>
                    <Td fontSize="small">{user.email}</Td>
                    <Td fontSize="small" isNumeric>
                      {user.phoneNumber}
                    </Td>
                    <Td fontSize="small">
                      {animals
                        .filter((animal) => animal.fosterUser === user?._id)
                        .map((animal) => (
                          <p>{animal.name}</p>
                        ))}
                    </Td>
                    <Td fontSize="small">
                      {animals
                        .filter((animal) => animal.adopterUser === user?._id)
                        .map((animal) => (
                          <p>{animal.name}</p>
                        ))}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Center>
    </div>
  );
};

export default ManageUsers;
