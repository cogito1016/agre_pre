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
`;

const ProductInfoBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: red;
`;

const Title = styled.label`
  display: block;
  height: 30px;
  padding-top: 10px;
  background-color: green;
`;

const Price = styled.label`
  display: block;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 18px;
  background-color: orange;
`;

const LOGO_SRC = "https://image.wingeat.com/logo/images/we_logo_center.png";

const ProductCard = () => {
  return (
    <Container>
      <ProductImg src={LOGO_SRC} />
      <ProductInfoBox>
        <Title>[예약판매 할인] [고른] 프리미엄 양념 LA갈비 (750g)</Title>
        <Price>23,900원</Price>
      </ProductInfoBox>
    </Container>
  );
};

export default ProductCard;
