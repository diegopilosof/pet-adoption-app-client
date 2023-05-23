import React from "react";
import {
  Center,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

//TODO: CORRECT THE THING WITH THE ACCORDION

const Faq = () => {
  return (
    <div>
      <Center>
        <Flex flexDirection="column" mt={10} justify="center" align="center">
          <h1>Got questions? Paws here for our FAQ page!</h1>
          <p>
            Find your answers faster than your dog can fetch with our FAQ page.
          </p>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    1. How do I adopt a pet?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can browse the pets available for adoption on our app and
                find one that matches your lifestyle and preferences. Once you
                find a pet you're interested in, you can contact the shelter or
                rescue organization to start the adoption process.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    2. What is the adoption process like?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The adoption process varies depending on the organization you're
                working with, but it typically involves filling out an adoption
                application, meeting the pet in person or virtually, and
                undergoing a screening process to ensure that you're a good fit
                for the pet.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    3. How much does it cost to adopt a pet?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Adoption fees vary depending on the organization and the pet
                you're adopting. Typically, the adoption fee includes the cost
                of spaying or neutering, vaccinations, and other medical care
                the pet may have received.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    4. What if I have allergies?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                If you have allergies, you may want to consider adopting a
                hypoallergenic breed or spending time with the pet before making
                a decision to adopt. You can also talk to your doctor about ways
                to manage your allergies.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    5. What if I already have pets at home?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                If you already have pets at home, it's important to introduce
                the new pet slowly and carefully to ensure that everyone gets
                along. Your adoption counselor can provide advice on introducing
                pets and help you choose a pet that's a good match for your
                existing pets.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    6. What if I can no longer care for my adopted pet?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                If for any reason you can no longer care for your adopted pet,
                you should contact the organization you adopted from as soon as
                possible. They may be able to take the pet back or help you find
                a new home for them.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    7. Can I return an adopted pet?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Most organizations have a return policy in case the adoption
                doesn't work out. Be sure to ask about the return policy before
                you adopt, and understand that returning a pet should be a last
                resort. It's important to give your new pet time to adjust to
                their new home and family.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Center>
    </div>
  );
};

export default Faq;
