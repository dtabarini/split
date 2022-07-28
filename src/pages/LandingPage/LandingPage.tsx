import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const EmptySpace = styled.div`
  height: 200px;
`;

const LandingPageContainer = styled.div`
  text-align: center;
`;

function LandingPage() {
  let navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("./claim");
  };

  return (
    <LandingPageContainer>
      Landing page
      <EmptySpace></EmptySpace>
      <Stack spacing={2}>
        <Button variant="contained">Create</Button>
        <Button variant="outlined" onClick={handleJoinClick}>
          Join
        </Button>
      </Stack>
    </LandingPageContainer>
  );
}

export default LandingPage;
