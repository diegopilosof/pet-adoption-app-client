import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import "../App.css";
import step1 from "../design/1.jpg";
import step2 from "../design/2.jpg";
import step3 from "../design/3.jpg";

const Service = () => {
  return (
    <div>
      <Center mb={10} Flex flexDir="column">
        <Center mb={5} mt={5}>
          <h1 className="service">Find Your Furry Friend in 3 Simple Steps</h1>
        </Center>
        <Center>
          <Flex
            align="center"
            justify="center"
            flexDirection="row"
            flexWrap="wrap"
            gap={5}
          >
            <Card w="300px" h="470px">
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bg="#F9F9F9"
              >
                <Image
                  src={step1}
                  alt="Find Your Furry Friend in 3 Simple Steps"
                  borderRadius="lg"
                  w="200px"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">1. Find your perfect friend</Heading>
                  <Text>
                    Browse through our wide selection of furry friends and find
                    the perfect match for you and your family.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card w="300px" h="470px">
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bg="#F9F9F9"
              >
                <Image
                  src={step2}
                  alt="Meet your new friend"
                  borderRadius="lg"
                  w="200px"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">2. Meet your new friend</Heading>
                  <Text>
                    Once you've found your match, schedule a meet and greet to
                    get to know your new furry friend and ensure they're the
                    perfect fit for you.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card w="300px" h="470px">
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bg="#F9F9F9"
              >
                <Image
                  src={step3}
                  alt="Bring them home"
                  borderRadius="lg"
                  w="200px"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">3. Bring them home</Heading>
                  <Text>
                    Congratulations, you've found your new family member! Take
                    them home and start making memories that will last a
                    lifetime. Don't forget to share pictures and updates with
                    us!
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Center>
      </Center>
    </div>
  );
};

export default Service;
