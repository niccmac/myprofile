import "./App.css";

import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import Skills from "./components/skills";
import Profile from "./components/profile";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import {
  Center,
  Text,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Link,
  Image,
  Flex,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Work from "./components/work";

const colors = {
  brand: {
    900: "#d7ccc8", // Dark
    800: "#eee5e9", // Lavender
    700: "#b68f40", // Dark Gold
    600: "#545454", // Grey
  },
};
function App() {
  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Profile />

        <Flex
          padding={4}
          minWidth="max-content"
          alignItems="center"
          flexDirection="column"
          marginBottom="200px"
          marginTop="100px"
        >
          <Projects />
          <br />
          <Skills />
          <br />
          <Work />
          <br />
          <Email />
        </Flex>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
