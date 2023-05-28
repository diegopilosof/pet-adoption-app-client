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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import facebook from "../design/facebook.svg";
import google from "../design/google.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });
  const [passwordMatch, setpasswordMatch] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    if (userDetails.password === userDetails.confirmPassword) {
      setpasswordMatch(true);
    } else {
      setpasswordMatch(false);
    }
  };

  useEffect(() => {
    if (userDetails.password !== userDetails.confirmPassword) {
      console.log("passwords don't match");
      console.log(userDetails.password, userDetails.confirmPassword);
      setpasswordMatch(true);
    } else {
      console.log("passwords match");
      console.log(userDetails.password, userDetails.confirmPassword);
      setpasswordMatch(false);
    }
  }, [userDetails.password, userDetails.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users`,
        userDetails
      );
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
        bg: "#7ed957",
        variant: "subtle",
      });
    } catch (error) {
      toast({
        title: "Houston, we have a problem...",
        description: error.response.data.error,
        status: "error",
        duration: 2000,
        isClosable: true,
        variant: "subtle",
      });
      console.log(error);
    }
    onClose();
  };

  return (
    <div>
      <Button
        bg="#7ed957"
        color="white"
        _hover={{ bg: "#5ce1e6", svg: { fill: "#7ed957" } }}
        size="sm"
        fontSize="16px"
        onClick={onOpen}
      >
        Sign up
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={4}>
            <Center>Unleash the love! Join the adoption squad!</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                onChange={handleChange}
                name="firstName"
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                onChange={handleChange}
                name="lastName"
                placeholder="Last name"
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                onChange={handleChange}
                name="phoneNumber"
                type="tel"
                ref={initialRef}
                placeholder="Phone Number"
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                onChange={handleChange}
                name="email"
                type="tel"
                ref={initialRef}
                placeholder="Email"
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                onChange={handleChange}
                name="password"
                type="password"
                ref={initialRef}
                placeholder="Password"
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                onChange={handleChange}
                name="confirmPassword"
                type="password"
                ref={initialRef}
                placeholder="Please repeat your Password"
              />
            </FormControl>

            {passwordMatch && (
              <Alert status="error" mt={3}>
                <AlertIcon />
                <AlertTitle>Uups!</AlertTitle>
                <AlertDescription>
                  It looks like your passwords don't match. Please try again.
                </AlertDescription>
              </Alert>
            )}
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
              isDisabled={
                userDetails.firstName === "" ||
                userDetails.lastName === "" ||
                userDetails.email === "" ||
                userDetails.phoneNumber === "" ||
                userDetails.password !== userDetails.confirmPassword
                  ? true
                  : false
              }
              onClick={handleSubmit}
            >
              Create Account
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* if the account is created add toast of success */}
    </div>
  );
};

export default Signup;
