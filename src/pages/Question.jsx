import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
//Link as RouterLink

import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../redux/questionSlice";

const Question = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gotoNextPage = useNavigate();

  const question = useSelector((state) => state.question.value);

  const nextScreen = () => {
    if (parseInt(id) + 1 >= question.length) {
      //game over"
      gotoNextPage("/score");
    } else {
      gotoNextPage(`/question/${parseInt(id) + 1}`);
    }
  };

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      height={"100vh"}
      minWidth={"100vw"}
      padding={0}
      margin={0}
    >
      <Box width={"100%"} align={"center"}>
        <Text fontSize="lg">Question {parseInt(id)+1} / {question.length}</Text>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
        align={"center"}
        maxHeight={"82vh"}
          src={question[id].q}
          alt={question[id].alt}
          border={"1px solid black"}
          />
      </Box>

      <ButtonGroup
        spacing={4}
        direction="row"
        display="flex"
        justifyContent="space-evenly"
      >
        <Button
          colorScheme="pink"
          padding={5}
          onClick={() => {
            dispatch(handleClick({ id, isFake: "legit" }));
            nextScreen();
          }}
        >
          Legit
        </Button>
        <Button
          colorScheme="cyan"
          padding={5}
          onClick={() => {
            dispatch(handleClick({ id, isFake: "fake" }));
            nextScreen();
          }}
        >
          Fake
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Question;
