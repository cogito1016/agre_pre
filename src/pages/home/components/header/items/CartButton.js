import styled from "styled-components";
import { withRouter } from "react-router-dom";

const CartButton_Style = styled.div`
  position: absolute;
  width: 60px;
  right: 0;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
`;

const CartItemNumberBox = styled.div`
  position: absolute;
  display: inline-block;
  right: 65px;
  top: 3px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  background-color: red;
`;

const CartButton = (props) => {
  const btnClickHandler = () => {
    props.history.push("/cart");
  };

  const productQuantityInCart = props.productQuantityInCart;

  return (
    <CartButton_Style onClick={btnClickHandler}>
      <CartItemNumberBox>
        {productQuantityInCart >= 99 ? "99+" : productQuantityInCart}
      </CartItemNumberBox>
      장바구니
    </CartButton_Style>
  );
};

export default withRouter(CartButton);
