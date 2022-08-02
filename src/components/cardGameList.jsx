import {
  Button,
  Grid,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameContext } from "../providers/cardProvider";
import { useState } from "react";
import { useEffect } from "react";

const CardList = () => {
  const { cardShow, newGame, handleCardClick, checkFlipped, cards } =
    useContext(gameContext);

  return (
    <>
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Button
          onClick={newGame}
          colorScheme="brand.900"
          variant="outline"
          size="sm"
          margin={10}
        >
          New Game
        </Button>
        <br />
        <Box padding={4} borderRadius={20}>
          <Grid
            className="card-game"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            justifyItems="center"
            gap={4}
            spacing={{ xs: 2, md: 3 }}
            columns={16}
          >
            {cards.map((card) => {
              return (
                <GridItem md={4} key={card.id}>
                  <Box alignItems="center">
                    <FontAwesomeIcon
                      key={card}
                      size="lg"
                      colSpan={2}
                      isinactive={"false"}
                      isflipped={checkFlipped(card.id)}
                      icon={cardShow(card.id, card.icon)}
                      padding={2}
                      onClick={(event) =>
                        handleCardClick(event, card.id, card.icon)
                      }
                      inverse
                    />
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        {/* </DrawerBody>
          </DrawerContent>
        </Drawer> */}
        {/* ) : null} */}
      </Box>
    </>
  );
};

export default CardList;
