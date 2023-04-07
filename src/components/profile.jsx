import ProfileAvatar from "./avatar";
import { Text, Divider, Flex, Container } from "@chakra-ui/react";
import { MyText } from "./text";

export default function Profile() {
  return (
    <Flex
      flexDirection={["column", "row"]}
      h={["250", "300"]}
      alignItems="center"
      padding={[4, 8]}
      w="60%"
      justifyContent="space-between"
      backgroundColor="#FFFFF0"
      marginBottom={"20px"}
      style={{
        boxShadow: "10px 10px #b23838",
        borderRadius: 20
      }}
    >
      <Container flexDirection="column" align="left" margin={1} maxWidth="100%">
        <MyText
          text="Nicole MacLean"
          bold
          style={{ fontSize: 20, fontWeight: 800 }}
        />
        <Divider />
        <MyText text="Full Stack Developer." />
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
