import ProfileAvatar from "./avatar";
import { Text, Divider, Flex, Container } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex
      flexDirection={["column", "row"]}
      h={["250", "200"]}
      alignItems="center"
      padding={[4, 8]}
      w="100%"
      justifyContent="space-between"
      backgroundColor="brand.600"
      marginBottom={"20px"}
      style={{
        boxShadow: "10px 10px #2D4739"
      }}
    >
      <Container flexDirection="column" align="left" margin={1} maxWidth="100%">
        <Text fontSize="3xl" w="100%">
          Nicole MacLean
        </Text>
        <Divider />
        <Text fontSize="sm">Full Stack Developer.</Text>
      </Container>

      <Container
        display="flex"
        margin={0}
        justifyContent={["center", "flex-end"]}
      >
        <ProfileAvatar />
      </Container>
    </Flex>
  );
}
