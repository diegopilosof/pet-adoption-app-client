import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  FormControl,
  Input,
  ModalCloseButton,
  Center,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import facebook from "../design/facebook.svg";
import google from "../design/google.svg";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Login = (props) => {
  const { handleLoginSubmit, loggedUser } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginSubmit(userLogin);
    onClose();
  };

  return (
    <div>
      <Button
        bg="white"
        color="#7ed957"
        _hover={{ color: "#5ce1e6" }}
        size="sm"
        fontWeight={750}
        fontSize="16px"
        onClick={onOpen}
        _active={{ bg: "white" }}
      >
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={5}>
            <Center>Welcome back! Let's find your furry BFF!</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <Input
                onChange={handleUserLogin}
                name="email"
                type="tel"
                ref={initialRef}
                placeholder="Email"
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                onChange={handleUserLogin}
                name="password"
                type="password"
                ref={initialRef}
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>
          <Center>Got socials? Connect with us!</Center>
          <Flex justify="center" align="center" gap={5} mb={5}>
            <Button
              size="sm"
              bg="#4460A0"
              color="white"
              mt={4}
              _hover={{
                bg: "#4460A",
              }}
            >
              {" "}
              <Image w="30px" src={facebook} />
            </Button>
            <Button
              size="sm"
              bg="#white"
              color="black"
              mt={4}
              boxShadow="xs"
              _hover={{
                bg: "#white",
              }}
            >
              {" "}
              <Image w="30px" src={google} />
            </Button>
          </Flex>

          <ModalFooter>
            <Button
              colorScheme="blue"
              bg="#7ed957"
              mr={3}
              _hover={{
                bg: "#5ce1e6",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
