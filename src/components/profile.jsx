import ProfileAvatar from "./avatar";
import Contact from "./contact";

import { Text, Divider, Flex, Container } from "@chakra-ui/react";

export default function Profile() {
  return (
    <div className="profile">
      <Flex
        backgroundColor="brand.600"
        padding={4}
        w="100%"
        h="200"
        justifyContent="space-between"
        minWidth="max-content"
        alignItems="center"
        style={{
          boxShadow: "10px 10px #2D4739",
        }}
      >
        <Container
          flexDirection="column"
          align="left"
          margin={1}
          maxWidth="100%"
        >
          <Text fontSize="3xl" w="100%">
            Nicole MacLean
          </Text>
          <Divider />
          <Text fontSize="sm">Full Stack Developer.</Text>
        </Container>

        <Container margin={0} align="right" w="33%">
          <ProfileAvatar />
        </Container>
      </Flex>
    </div>
  );
}
