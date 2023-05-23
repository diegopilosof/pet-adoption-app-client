import React from "react";
import "../App.css";
import { Image, Flex, Text, Link, Center } from "@chakra-ui/react";
import facebook from "../design/facebook.svg";
import instagram from "../design/instagram.svg";
import twitter from "../design/twitter.svg";

const Footer = () => {
  return (
    <Flex align="center" justify="space-between" my={5} mx={5}>
      <Flex align="center" justify="center">
        <Text mr={3}>Privacy Policy</Text>
        <Text mr={3}>FAQ</Text>
      </Flex>
      <Center>
        <Image w="40px" src={facebook} />
        <Image w="40px" src={instagram} />
        <Image w="40px" src={twitter} />
      </Center>
      <Flex>
        <Link>dlpilosof@gmail.com</Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
