import React, { useRef } from "react";

import emailjs from "emailjs-com";
import {
  Input,
  Button,
  Textarea,
  Container,
  Text,
  Divider,
  useToast,
  SimpleGrid,
  Box,
  Center
} from "@chakra-ui/react";

// Send button colours
// TODO get tool tip working. Appears after alert
// TODO fix divider full width
export default function Email() {
  const form = useRef();

  const toast = useToast();
  // Clipboards email
  function alertToast() {
    toast({
      title: "Email sent!",
      description: "I'll get back to you as soon as possible!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top"
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ll4uldf",
        "template_5y7ujur",
        form.current,
        "HZXpU8rFzP1qacpqK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alertToast();

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <SimpleGrid columns={1} backgroundColor="#FFFFF0" w={["92%", "70%"]}>
      <Box
        colSpan={1}
        style={{ boxShadow: "10px 10px  #b23838" }}
        padding={[4, 8]}
      >
        <Center flexDirection="column">
          <Container
            flexDirection="column"
            align="left"
            margin={1}
            maxWidth="100%"
          >
            <Text fontSize="xl" w="100%">
              Contact
            </Text>
            <Divider />
            <Text fontSize="sm">Send me an email.</Text>
          </Container>
          <Container flexDirection={["column"]} marginTop={5} maxWidth="100%">
            <form ref={form} onSubmit={sendEmail}>
              <Box display="flex" flexDirection={["column"]} gap={3}>
                <Textarea
                  placeholder="Write your message here!"
                  color="brand.800"
                  colorScheme="brand.900"
                  focusBorderColor="brand.800"
                  errorBorderColor="red.500"
                  isRequired
                  name="message"
                  h="200px"
                />

                <Input
                  placeholder="Your name"
                  color="brand.900"
                  colorScheme="brand.900"
                  focusBorderColor="brand.900"
                  errorBorderColor="red.500"
                  isRequired
                  name="name"
                />
                <Input
                  placeholder="Your email"
                  colorScheme="brand.800"
                  focusBorderColor="brand.800"
                  errorBorderColor="red.500"
                  isRequired
                  name="email"
                />

                <Button
                  colorScheme="brand.800"
                  borderColor="brand.800"
                  variant="outline"
                  type="submit"
                  value="Submit"
                  size="md"
                >
                  Send!
                </Button>
              </Box>
              {/* </GridItem>
              </Grid> */}
            </form>
          </Container>
        </Center>
      </Box>
    </SimpleGrid>
  );
}
