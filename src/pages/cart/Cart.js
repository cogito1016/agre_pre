import styled from "styled-components";

const Container = styled.div`
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
  height: 100px;
  background-color: red;
`;

const Cart = () => {
  return (
    <Container>
      <CartTitle>장바구니</CartTitle>
      <CartBox>..</CartBox>
    </Container>
  );
};

export default Cart;
