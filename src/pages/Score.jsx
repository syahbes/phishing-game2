import React from "react";
import { Link as RouterLink } from "react-router-dom";
//

import { useSelector, useDispatch } from "react-redux";
import { newGame } from "../redux/questionSlice";

import { Box, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";

const Score = () => {
  const score = useSelector((state) => state.question.score);
  const wrongAnswers = useSelector((state) => state.question.wrongAnswers);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        backgroundColor="black"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"25px"}
          margin={"auto"}
          padding={"25px"}
          border={"1px solid cyan"}
          borderRadius={"15px"}
          boxShadow={
            "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)"
          }
          minWidth={"70%"}
        >
          <Heading as="h2" size="xl" color="cyan.200">
            Game Over
          </Heading>
          <Text fontSize="2xl" color="white" marginBottom={"5px"}>
            Your score :
          </Text>

          <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
            <Text
              fontSize="2xl"
              color="yellow"
              marginBottom={"5px"}
              gap={"25px"}
            >
              {score}
            </Text>
            <Text
              fontSize="2xl"
              color="white"
              marginBottom={"5px"}
              gap={"25px"}
            >
              correct answers
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={"10px"}
            marginBottom={"25px"}
          >
            <Text
              fontSize="2xl"
              color="tomato"
              marginBottom={"5px"}
              gap={"25px"}
            >
              {wrongAnswers.length}
            </Text>
            <Text
              fontSize="2xl"
              color="white"
              marginBottom={"5px"}
              gap={"25px"}
            >
              Wrong answers
            </Text>
          </Box>

          <ButtonGroup
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            gap={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            { wrongAnswers.length > 0 ? <Button
              as={RouterLink}
              to="/showright/0"
              colorScheme="purple"
              size="md"
            >
              Click to see the right answers
            </Button> : ""}
            <Button
               as={RouterLink} to="/question/0"
              colorScheme="yellow"
              size="md"
              //this is the wrong syntax : onClick={() => { dispatch(newGame); }}
              onClick={() => dispatch(newGame())}
            >
              Start Over
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default Score;
