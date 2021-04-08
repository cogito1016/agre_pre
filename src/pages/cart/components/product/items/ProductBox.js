import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 150px;
  padding-top: 10px;
  border: 1px solid black;
`;

const ProductTitle = styled.label`
  display: block;
  width: 200px;
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

const ProductBox = () => {
  return (
    <Container>
      <ProductTitle>
        <input type="checkbox" />
        간편 훈제 삼겹살 (2인분)
      </ProductTitle>
      <ProductImg alert="이미지" />
      <ProductPrice>7,900원</ProductPrice>

      <ProductQuantity>
        <QuantityControlBtn>-</QuantityControlBtn>
        <QuantityLabel>2</QuantityLabel>
        <QuantityControlBtn>+</QuantityControlBtn>
      </ProductQuantity>

      <CancelBtn>X</CancelBtn>
      <TotalPriceLabel>합계: 15,800원</TotalPriceLabel>
    </Container>
  );
};

export default ProductBox;
