import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const Clock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 3rem;
`;

const Timer = () => {
  return (
    <Container>
      <Clock>60</Clock>
    </Container>
  );
};

export default Timer;
