import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 500px;
  height: 150px;
`;

const TotalPriceBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 80px;
  line-height: 80px;
  margin: 10px auto 0 auto;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const OrderBtn = styled.div`
  width: 380px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  user-select: none;
  color: white;
  border-radius: 5px;
  margin: 10px auto 0 auto;
  background-color: #f23e42;
`;

const PriceLabel = styled.label`
  font-weight: bold;
  color: #f23e42;
`;

const Calculator = (props) => {
  const { totalPrice } = props;
  const totalPriceInKorea = totalPrice.toLocaleString("ko-KR");

  return (
    <Container>
      <TotalPriceBox>
        <label>결제 예정 금액</label>
        <PriceLabel>{totalPriceInKorea}원</PriceLabel>
      </TotalPriceBox>

      <OrderBtn>주문하기</OrderBtn>
    </Container>
  );
};

export default Calculator;
