import styled from "styled-components";
import { Calculator, Product } from "./components";

const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background-color: gray;
`;

const CartTitle = styled.h1`
  margin: 40px 0 40px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CartBox = styled.div`
  width: 650px;
  justify-content: space-between;
  background-color: red;
`;

const Cart = () => {
  return (
    <Container>
      <CartTitle>장바구니</CartTitle>
      <CartBox>
        <Product />
      </CartBox>
      <Calculator />
    </Container>
  );
};

export default Cart;
