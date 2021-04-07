import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 280px;
  margin-bottom: 30px;
  background-color: gray;
  border-radius: 5px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ProductInfoBox = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: red;
`;

const Title = styled.label`
  display: block;
  height: 40px;
  user-select: none;
  cursor: pointer;
  background-color: green;
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
  background-color: orange;
`;

const endPoint = "https://image.wingeat.com";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <Container>
      <ProductImg src={`${endPoint}/${product.image}`} />
      <ProductInfoBox>
        <Title>{product.itemName}</Title>
        <Price>{product.price}원</Price>
      </ProductInfoBox>
    </Container>
  );
};

export default ProductCard;
