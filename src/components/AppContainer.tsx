import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const AppArea = styled.div`
  width: 400px;
  background-color: white;
  margin: auto;
  padding-top: 100px;
  border-radius: 20px;
  padding: 10px;
`;

const Background = styled.div`
  background-color: rgb(233, 224, 242);
  height: 100vh;
  padding-top: 120px;
`;

function AppContainer(props: any) {
  return (
    <Background>
      <AppArea>{props.children}</AppArea>
    </Background>
  );
}

export default AppContainer;
