import "./App.css";

import Projects from "./components/projects";
import Contact from "./components/contact";
import Email from "./components/email";
import Skills from "./components/skills";
import Profile from "./components/profile";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import { Flex } from "@chakra-ui/react";
import Work from "./components/work";

const colors = {
  brand: {
    900: "#d7ccc8", // Dark
    800: "#eee5e9", // Lavender
    700: "#b68f40", // Dark Gold
    600: "#545454" // Grey
  }
};
function App() {
  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Flex
          padding={4}
          alignItems="center"
          flexDirection="column"
          marginBottom={["200px"]}
          marginTop={["30px", "100px"]}
          gap={4}
        >
          <Profile />
          <Projects />
          <Skills />
          <Work />
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
