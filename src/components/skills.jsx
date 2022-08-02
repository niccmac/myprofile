import {
  Box,
  SimpleGrid,
  Flex,
  Icon,
  chakra,
  Center,
  Text,
  Divider,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {
  DiJsBadge,
  DiReact,
  DiRuby,
  DiCss3,
  DiJqueryLogo,
  DiHtml5,
  DiPostgresql,
  DiNodejsSmall,
  DiGit,
} from "react-icons/di";
import {
  SiExpress,
  SiSequelize,
  SiMocha,
  SiChai,
  SiCypress,
  SiChakraui,
  SiMaterialui,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

      alt: "JS",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      alt: "react",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg",
      alt: "ruby",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
      alt: "rails",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      alt: "css",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg",
      alt: "jq",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      alt: "HTML",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
      alt: "postgres",
    },
    {
      src: "https://img.icons8.com/color/400/000000/chakra-ui.png",
      alt: "chakra ui",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
      alt: "node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
      alt: "sequ",
    },
    {
      src: "https://avatars.githubusercontent.com/u/1515293?s=200&v=4",
      alt: "chai",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
      alt: "git",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
      alt: "Mocha",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      alt: "MUI",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "figma",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      alt: "sass",
    },
    {
      src: "https://www.opencodez.com/wp-content/uploads/2019/12/cypress-logo.png",
      alt: "cypress",
    },
    {
      src: "https://img.icons8.com/dusk/400/000000/api.png",
      alt: "APIS",
    },
  ];
  return (
    <SimpleGrid
      columns={1}
      backgroundColor="brand.600"
      // justifyContent="center"
      w="70%"
    >
      <Box
        colSpan={1}
        style={{
          boxShadow: "10px 10px  #2D4739",
        }}
      >
        <Center flexDirection="column">
          <Container
            flexDirection="column"
            align="left"
            margin={1}
            maxWidth="100%"
          >
            <Text fontSize="xl" w="100%">
              Skills
            </Text>
            <Divider />
            <Text fontSize="sm">Tried and tested.</Text>
          </Container>

          <SimpleGrid
            padding={4}
            columns={10}
            spacingX={5}
            spacingY={10}
            mt={6}
            justifyItems="center"
          >
            {skills.map((skill) => {
              return (
                <img
                  src={skill.src}
                  alt={skill.alt}
                  width={100}
                  key={skill.src}
                />
              );
            })}
          </SimpleGrid>
        </Center>
      </Box>
    </SimpleGrid>
  );
}
