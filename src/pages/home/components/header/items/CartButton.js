import styled from "styled-components";

const CartButton_Style = styled.div`
  position: absolute;
  width: 80px;
  right: 10px;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
`;

const CartItemNumberBox = styled.div`
  display: inline;
  margin-right: 5px;
  border-radius: 10px;
  text-align: center;
  color: white;
  background-color: red;
`;

const CartButton = () => {
  return (
    <CartButton_Style>
      <CartItemNumberBox>99+</CartItemNumberBox>
      장바구니
    </CartButton_Style>
  );
};

export default CartButton;
