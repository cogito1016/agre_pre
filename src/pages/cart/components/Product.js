import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 150px;
  padding-top: 10px;
  border: 1px solid black;
`;

const ProductTitle = styled.label`
  display: block;
  width: 600px;
  margin-left: 10px;
`;

const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  margin-top: 10px;
`;

const ProductPrice = styled.label`
  position: absolute;
  left: 120px;
  top: 40px;
  display: block;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
`;

const ProductQuantity = styled.label`
  position: absolute;
  left: 120px;
  top: 80px;
  display: flex;
  justify-content: space-between;
  width: 100px;
  font-size: 20px;
  background-color: #e0e1e2;
`;

const CancelBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

const TotalPriceLabel = styled.label`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: block;
  font-weight: bold;
  font-size: 18px;
`;

const QuantityControlBtn = styled.div`
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

const QuantityLabel = styled.label`
  display: block;
  line-height: 30px;
`;

const IMAGE_ENDPOINT = process.env.REACT_APP_IMAGE;

const ProductBox = (props) => {
  const {
    product,
    productCheckHandler,
    productQuantityControlHandler,
    productCancelHandler,
  } = props;
  const { image, itemName, price, quantityInCart, checked, id } = product;
  const priceInKorea = price.toLocaleString("ko-KR");
  const totalPrice = (price * quantityInCart).toLocaleString("ko-KR");

  return (
    <Container>
      <ProductTitle>
        <input
          type="checkbox"
          onChange={(e) => productCheckHandler(e, id)}
          checked={checked}
        />
        {itemName}
      </ProductTitle>
      <ProductImg src={`${IMAGE_ENDPOINT}/${image}`} />
      <ProductPrice>{priceInKorea}원</ProductPrice>

      <ProductQuantity>
        <QuantityControlBtn
          onClick={() => productQuantityControlHandler(id, -1)}
        >
          -
        </QuantityControlBtn>
        <QuantityLabel>{quantityInCart}</QuantityLabel>
        <QuantityControlBtn
          onClick={() => productQuantityControlHandler(id, +1)}
        >
          +
        </QuantityControlBtn>
      </ProductQuantity>

      <CancelBtn onClick={() => productCancelHandler(id)}>X</CancelBtn>
      <TotalPriceLabel>합계: {totalPrice}원</TotalPriceLabel>
    </Container>
  );
};

export default ProductBox;
