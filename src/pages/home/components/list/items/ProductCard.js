import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 280px;
  margin-bottom: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductInfoBox = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Title = styled.label`
  display: block;
  height: 40px;
  user-select: none;
  cursor: pointer;
`;

const Price = styled.label`
  display: block;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  font-size: 18px;
  user-select: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`;

const endPoint = process.env.REACT_APP_IMAGE;

const ProductCard = (props) => {
  const product = props.product;
  const { image, itemName, price } = product;
  const productClickHandler = props.productClickHandler;

  let priceByKorean = price.toLocaleString("ko-KR");

  return (
    <Container onClick={() => productClickHandler(product)}>
      <ProductImg src={`${endPoint}/${image}`} />
      <ProductInfoBox>
        <Title>{itemName}</Title>
        <Price>{priceByKorean}원</Price>
      </ProductInfoBox>
    </Container>
  );
};

export default ProductCard;
