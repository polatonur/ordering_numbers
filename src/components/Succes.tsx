import styled from "styled-components";
import Confetti from "react-confetti";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Message = styled.div`
  display: flex;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightgreen;
  width: 700px;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 50px;
`;
const Emoji = styled.h1`
  font-size: 7rem;
`;
const Button = styled.button`
  padding: 20px;
  border-radius: 20px;
  border: none;
  background-color: green;
  color: white;
  font-size: 2rem;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  margin: 20px;
`;
const Succes = () => {
  return (
    <Container>
      <Confetti />
      <Message>
        <Emoji>🥳</Emoji>
        <Title>Conguratulations You Win</Title>
        <div>
          {" "}
          <Button>Play again</Button>
          <Button>Quit</Button>
        </div>
      </Message>
    </Container>
  );
};

export default Succes;
