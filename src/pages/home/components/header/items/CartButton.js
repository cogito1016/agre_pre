import styled from "styled-components";
import { withRouter } from "react-router-dom";

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
  padding: 1px;
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
        {productQuantityInCart >= 999 ? "999+" : productQuantityInCart}
      </CartItemNumberBox>
      장바구니
    </CartButton_Style>
  );
};

export default withRouter(CartButton);
