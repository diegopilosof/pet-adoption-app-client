import React from "react";
import {
  Center,
  Flex,
  Heading,
  Button,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import fondocachorros from "../design/fondo_cachorros.jpg";

const AdminDashboard = () => {
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
          <Heading mt={5}>Admin Dashboard</Heading>
        </Center>
        <Center px={20} textAlign="center">
          <Text size="md" mb={5}>
            The "User and Pet Management" section allows administrators to
            efficiently manage user accounts and pet profiles. Administrators
            can easily access, review, edit, and delete user information and pet
            profiles as needed. This streamlined functionality simplifies the
            process of overseeing user accounts and pet-related operations,
            ensuring effective management within the system.
          </Text>
        </Center>
        <Flex gap={10}>
          <Center
            flexDirection="column"
            mt={10}
            justify="center"
            align="center"
            border="1px solid grey"
            p={10}
            borderRadius="40"
            borderColor="#CBD5E0"
            w="350px"
          >
            <Heading>Manage Pets</Heading>
            <p>View, Edit, and Delete Pets</p>
            <Center flexDirection="column" justify="center" align="center">
              <a href="/managepets">
                <Button
                  variant="solid"
                  bg="#7ED957"
                  color="white"
                  _hover={{
                    bg: "#5ce1e6",
                  }}
                  mb={5}
                >
                  Manage Pets
                </Button>
              </a>
              <a href="/addpet">
                <Button
                  variant="solid"
                  bg="#7ED957"
                  color="white"
                  _hover={{
                    bg: "#5ce1e6",
                  }}
                  mb={5}
                >
                  Add a pet
                </Button>
              </a>
            </Center>
          </Center>
          <Center
            flexDirection="column"
            mt={10}
            justify="center"
            align="center"
            border="1px solid grey"
            p={10}
            borderRadius="40"
            borderColor="#CBD5E0"
            w="350px"
          >
            <Heading>Manage Users</Heading>
            <p>View, Edit, and Delete User Accounts</p>
            <Center flexDirection="column" justify="center" align="center">
              <a href="/manageusers">
                <Button
                  variant="solid"
                  bg="#7ED957"
                  color="white"
                  _hover={{
                    bg: "#5ce1e6",
                  }}
                  mb={1}
                >
                  Manage Users
                </Button>
              </a>
            </Center>
          </Center>
        </Flex>
      </Center>
    </div>
  );
};

export default AdminDashboard;
