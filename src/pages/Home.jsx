import { Box, Button, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { newGame } from "../redux/questionSlice";

const Home = () => {
  const dispatch = useDispatch()

  return (
    <Box
      bgColor={"yellow.100"}
      padding={10}
      margin={"auto"}
      borderRadius={30}
      boxShadow={"5px 10px"}
      border={"2px solid black"}
    >
<Stack spacing={10}>
        <Heading>Welcome to the Cyber Game</Heading>
        <Text fontSize="3xl" >are you up for the Phishing challenge?!</Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"right"}
          width={"100%"}
        >
          <Button as={RouterLink} to="/question/0" colorScheme="purple" size="lg"
            onClick={() => dispatch(newGame())}
          >
            Start
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
