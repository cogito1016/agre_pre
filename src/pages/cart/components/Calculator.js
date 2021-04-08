import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  background-color: green;
  width: 500px;
`;

const Calculator = () => {
  return <Container>I'M Calculator</Container>;
};

export default Calculator;
