import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
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
  WrapItem,
  Avatar,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Heading,
  Wrap,
  Image,
} from "@chakra-ui/react";
import usersroutes from "../routes/usersroutes";
import fondoperritos from "../design/fondo_perritos.jpg";

// TODO: put the name of the user in the input fields
// TODO: put the profile picture of the user in the avatar
// TODO: make the avatar clickable and allow the user to upload a new profile picture
// TODO: make the input fields editable
// TODO: make the input fields required
// TODO: make the input fields validate the input
// TODO: make the input fields save the changes to the database WITH A BUTTON

const ProfilePage = () => {
  const { loggedUser, handleUpdateProfile } = useContext(UserContext);
  const [user, setUser] = useState({
    firstName: loggedUser?.firstName,
    lastName: loggedUser?.lastName,
    email: loggedUser?.email,
    phoneNumber: loggedUser?.phoneNumber,
    password: loggedUser?.password,
    confirmPassword: loggedUser?.confirmPassword,
  });
  const [profilePicture, setProfilePicture] = useState(
    loggedUser?.profilePicture
  );

  const [passwordMatch, setpasswordMatch] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (loggedUser) {
      setUser({
        firstName: loggedUser?.firstName,
        lastName: loggedUser?.lastName,
        email: loggedUser?.email,
        phoneNumber: loggedUser?.phoneNumber,
        password: loggedUser?.password,
        confirmPassword: loggedUser?.confirmPassword,
        profilePicture: loggedUser?.profilePicture,
      });
    }
  }, [loggedUser]);

  //make a useeffect so that the picture changes as soon as the user uploads a new one

  const handleProfileChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
    setUser({ ...user, profilePicture: e.target.files[0] });
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    const form = new FormData();

    console.log(form);
    form.append("firstName", user.firstName);
    form.append("lastName", user.lastName);
    form.append("email", user.email);
    form.append("phoneNumber", user.phoneNumber);
    form.append("password", user.password);
    form.append("confirmPassword", user.confirmPassword);
    form.append("profilePicture", profilePicture);

    const response = await usersroutes.updateProfile(form);
    handleUpdateProfile(response);

    toast({
      title: "Successful Profile Update!",
      description: "Our furry friends are willing to meet your new version!",
      status: "success",
      duration: 2000,
      isClosable: true,
      bg: "#7ed957",
      variant: "subtle",
    });
  };

  useEffect(() => {
    if (user.password !== user.confirmPassword) {
      console.log("passwords don't match");
      console.log(user.password, user.confirmPassword);
      setpasswordMatch(true);
    } else {
      console.log("passwords match");
      console.log(user.password, user.confirmPassword);
      setpasswordMatch(false);
    }
  }, [user.password, user.confirmPassword]);

  return (
    <div>
      <Box>
        <Image
          src={fondoperritos}
          alt="logo"
          w="100%"
          h="200px"
          objectPosition="45% 45%"
          objectFit="cover"
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
          <Heading>Profile Settings</Heading>
          <p>Manage Your Pet App Account and Preferences</p>
          <WrapItem>
            <Avatar
              size="2xl"
              name={user.firstName + " " + user.lastName}
              src={user.profilePicture}
              mb={5}
            />
          </WrapItem>
          <FormControl>
            <Center>
              <FormLabel>Profile Picture</FormLabel>
            </Center>
            <Input
              name="profilePicture"
              placeholder="Profile Picture"
              borderRadius="40"
              color="black"
              type="file"
              mb={5}
              onChange={handlePictureChange}
            />
          </FormControl>
          <Flex gap={5}>
            <FormControl>
              <Center>
                <FormLabel>First Name</FormLabel>
              </Center>
              <Input
                name="firstName"
                borderRadius="40"
                color="black"
                mb={5}
                defaultValue={loggedUser?.firstName}
                onChange={handleProfileChange}
                value={user.firstName}
              />
            </FormControl>
            <FormControl>
              <Center>
                <FormLabel>Last Name</FormLabel>
              </Center>
              <Input
                name="lastName"
                placeholder="Last Name"
                borderRadius="40"
                color="black"
                mb={5}
                value={user.lastName}
                onChange={handleProfileChange}
              />
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl>
              <Center>
                <FormLabel>Phone Number</FormLabel>
              </Center>
              <Input
                name="phoneNumber"
                placeholder="Phone Number"
                borderRadius="40"
                color="black"
                type="tel"
                mb={5}
                onChange={handleProfileChange}
                value={user.phoneNumber}
              />
            </FormControl>
            <FormControl>
              <Center>
                <FormLabel>Email</FormLabel>
              </Center>
              <Input
                name="email"
                placeholder="Email"
                borderRadius="40"
                color="black"
                type="tel"
                mb={5}
                onChange={handleProfileChange}
                value={user.email}
              />
            </FormControl>
          </Flex>
          <Flex flexDirection="column">
            <Flex gap={5}>
              <FormControl>
                <Center>
                  <FormLabel>Password</FormLabel>
                </Center>
                <Input
                  name="password"
                  placeholder="New Password"
                  borderRadius="40"
                  color="black"
                  type="password"
                  mb={5}
                  onChange={handleProfileChange}
                />
              </FormControl>
              <FormControl>
                <Center>
                  <FormLabel>Repeat Password</FormLabel>
                </Center>
                <Input
                  name="confirmPassword"
                  placeholder="Repeat New Password"
                  borderRadius="40"
                  color="black"
                  type="password"
                  mb={5}
                  onChange={handleProfileChange}
                />
              </FormControl>
            </Flex>
            {passwordMatch && (
              <Alert status="error" mb={5}>
                <AlertIcon />
                <AlertTitle>Uups!</AlertTitle>
                <AlertDescription>
                  It looks like your passwords don't match. Please try again.
                </AlertDescription>
              </Alert>
            )}
          </Flex>
          <Button
            variant="solid"
            bg="#7ED957"
            color="white"
            _hover={{
              bg: "#5ce1e6",
            }}
            onClick={updateProfile}
          >
            Save Changes
          </Button>
        </Flex>
      </Center>
    </div>
  );
};

export default ProfilePage;
