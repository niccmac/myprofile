import React, { useRef } from "react";

import emailjs from "emailjs-com";
import {
  Input,
  Button,
  Textarea,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Container,
  Text,
  Divider,
  useToast,
  SimpleGrid,
  Box,
  Center,
  Grid,
  GridItem,
  useDisclosure,
  Collapse,
  UnorderedList,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon
} from "@chakra-ui/react";

// Send button colours
// TODO get tool tip working. Appears after alert
// TODO fix divider full width
export default function Work() {
  const jobs = [
    {
      role: "Junior Dev",
      company: "theNumber, Victoria BC",
      timeline: "Sep 2022 - NOW",
      link: "https://thenumber.ca/",
      icon: "software-engineer.png",
      description: (
        <>
          <u>ENGINEERING</u>
          <Text size="5xl" align="flex-start">
            • Assisting the development manager with aspects of software design
            and coding.
          </Text>
          <Text alignSelf="flex-start">
            • Attending and contributing to company development meetings.
          </Text>
          <Text alignSelf="flex-start">
            • Learning the codebase and improving your coding skills.
          </Text>
          <Text alignSelf="flex-start">• Writing and maintaining code.</Text>
          <Text alignSelf="flex-start"> • Working on minor bug fixes.</Text>
        </>
      )
    },

    {
      role: "Lead Distiller",
      company: "Victoria Distillers",
      timeline: "Mar 2020 - Feb 2022",
      link: "https://victoriadistillers.com/",
      icon: "2933813.png",
      description: (
        <>
          <u>DISTILLERY</u>
          <Text alignSelf="flex-start">
            • Planned, scheduled, supervised, operated and maintained distilling
            equipment for company - SpecMech, Müeller.
          </Text>
          <Text alignSelf="flex-start">
            • Established workflow documentation that optimizes productivity and
            consistency.
          </Text>

          <Text alignSelf="flex-start">
            • Worked on a change management team, where a broad range of
            continuous improvement projects were completed, including a key
            software transition with no downtime.
          </Text>

          <Text alignSelf="flex-start">
            •Key project reduced raw material usage by 20%.
          </Text>
        </>
      )
    },
    {
      role: "Head Distiller/Head Brewer",
      company: "Macaloney Distillers",
      timeline: "May 2017 - Oct 2019",
      link: "https://victoriacaledonian.com/caledonian-whisky/",
      icon: "2933813.png",
      description: (
        <>
          <u>BREWERY</u>
          <Text alignSelf="flex-start">
            • Supervised staff, operated and maintained brewing equipment for
            company or contract use grain to glass - DME, SpecMech, Gia, KHS.
          </Text>
          <Text alignSelf="flex-start">
            • Hired employees, developed and trained teams, which extended to
            other departments.
          </Text>
          <Text alignSelf="flex-start">
            • Created/restructured recipes resulting in decreased product
            destruction, and enhanced ratings.
          </Text>
          <Text alignSelf="flex-start">
            • Planned/scheduled production, that increased ability to take on
            special projects. Effective stock and material requirement planning.
          </Text>
          <Text alignSelf="flex-start">
            • Created and organized production plans/records, SOP’s and quality
            control measures to ensure high quality product and compliance with
            BC-Canadian standards.
          </Text>
          <Text alignSelf="flex-start">
            • Enabled plant inspections for key outside parties and contract
            customers. Maintained fundamental benchmarks set by regulatory
            bodies and improved relations to gain new and less restrictive
            permits.
          </Text>
          <u>DISTILLERY</u>
          <Text alignSelf="flex-start">
            • Planned, scheduled, supervised, operated and maintained
            traditional Scotch-Irish style distilling equipment for company and
            contract use from grain to wood to glass - Forsyth, SpecMech.
          </Text>
          <Text alignSelf="flex-start">
            • Creation of inaugural production records, SOP’s and quality
            control measures to ensure final spirit quality and compliance with
            BC-Canadian standards.
          </Text>
          <Text alignSelf="flex-start">
            • Facilitated contractors on +$100,000 repair project of adiabatic
            cooler.
          </Text>
          <Text alignSelf="flex-start">
            • Part of special project teams - peat malt smoking, “Rick-House”,
            Irish style whiskey.
          </Text>
        </>
      )
    },
    {
      role: "Brewer",
      company: "Driftwood Brewery",
      timeline: "Apr 2016 - Apr 2017",
      link: "https://driftwoodbeer.ca/",
      icon: "3466690.png",
      description: (
        <>
          <u>BREWERY</u>
          <Text alignSelf="flex-start">
            • Driftwood Brewery, Victoria BC. Worked and maintained brewing
            equipment, cellar, filtration and packaging - SpecMech, KHS, Alfa
            Laval.
          </Text>
          <Text alignSelf="flex-start">
            • Organized production records and created SOP's.
          </Text>
        </>
      )
    }
    // {
    //   role: "Brewer - Packaging Operator",
    //   company: "Brewdog, Ellon, Scotland",
    //   timeline: "Apr 2016 - Apr 2017",
    //   link: "https://www.brewdog.com/uk",
    //   icon: "3466690.png",
    //   description: (
    //     <>
    //       <u>BREWERY</u>
    //      <Text alignSelf="flex-start">
    //         • Performed as an acting supervisor of 3-4 team members, while
    //         maintaining production records.
    //       </Text>
    //      <Text alignSelf="flex-start"> • Trained staff on plant operations.</Text>
    //      <Text alignSelf="flex-start">
    //         • Operated and maintained brewhouse, cellar and filtration - Rolec,
    //         AlfaLaval.
    //       </Text>
    //      <Text alignSelf="flex-start">
    //         • Analyzed product in laboratory; leading to final decisions on
    //         product.
    //       </Text>
    //      <Text alignSelf="flex-start">
    //         • Contributed to plant safety and quality feature development and
    //         internal projects.
    //       </Text>
    //       <u>PACKAGING</u>
    //      <Text alignSelf="flex-start">
    //         • Advised senior staff on initiatives, improvements and counselled
    //         management regarding employee progression.
    //       </Text>
    //      <Text alignSelf="flex-start">
    //         • Trusted to facilitate plant inspections - Tesco, Trading
    //         Standards, Contract Customers.
    //       </Text>
    //      <Text alignSelf="flex-start">
    //         • Surveyed 3-4 packaging assistants operated and maintained
    //         equipment - KHS, Krones, EuroStar, while maintaining production
    //         records.
    //       </Text>
    //      <Text alignSelf="flex-start"> • Trained staff on procedure and machinery.</Text>
    //     </>
    //   )
    // }
  ];

  return (
    <SimpleGrid columns={1} backgroundColor="brand.600" w={["92%", "70%"]}>
      <Box
        colSpan={1}
        padding={[4, 8]}
        style={{ boxShadow: "10px 10px #2D4739" }}
      >
        <Center flexDirection="column">
          <Container
            flexDirection="column"
            align="left"
            margin={1}
            maxWidth="100%"
          >
            <Text fontSize="xl" w="100%">
              Work Experience
            </Text>
            <Divider />
            <Text fontSize="sm">Previous roles.</Text>
          </Container>

          <Stack className="jobs" w="100%">
            <Accordion allowToggle mb={[5]}>
              {jobs.map((job) => {
                return (
                  <AccordionItem
                    border="transparent"
                    key={job.company}
                    mt={[5]}
                  >
                    <AccordionButton>
                      <AccordionIcon />
                      {job.role}
                    </AccordionButton>
                    <AccordionPanel margin={[-1, 10]}>
                      <Box display="flex" justifyContent={["center"]} m={[2]}>
                        <a href={job.link} target="blank">
                          <img
                            color="red"
                            src={job.icon}
                            alt="still"
                            width="50"
                            height="50"
                          />
                        </a>
                      </Box>
                      <Box display="flex" flexDirection="column">
                        <Text alignSelf="flex-start">
                          {job.company.toUpperCase()}
                        </Text>
                        <Text alignSelf="flex-start">{job.timeline}</Text>
                        {job.description}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Stack>
        </Center>
      </Box>
    </SimpleGrid>
  );

  /* <Text alignItems="flex-start" fontSize="xl">
Email
</Text>
<Divider />

</form> */
}
