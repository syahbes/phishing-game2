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

import { useSelector } from "react-redux";


const ShowRight = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const gotoNextPage = useNavigate();

  const wrongAnswers = useSelector((state) => state.question.wrongAnswers);

  const nextScreen = () => {
    if (parseInt(id) + 1 >= wrongAnswers.length) {
      //game over"
      gotoNextPage("/score");
    } else {
      gotoNextPage(`/showright/${parseInt(id) + 1}`);
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
        <Text fontSize="lg">Solution {parseInt(id)+1} / {wrongAnswers.length}</Text>
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
          src={wrongAnswers[id]}
          alt={"Solution"}
          // fallbackSrc='https://via.placeholder.com/150'
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
          disabled={(parseInt(id) + 1 >= wrongAnswers.length)}
          onClick={() => {
            nextScreen();
          }}
        >
          Next
        </Button>
        <Button
          colorScheme="cyan"
          padding={5}
          onClick={() => {
            gotoNextPage("/score");
            
          }}
        >
          Back to Score
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ShowRight;
