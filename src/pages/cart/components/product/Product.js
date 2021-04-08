import styled from "styled-components";
import ProductBox from "./items/ProductBox";

const Container = styled.div`
  width: 600px;
  background-color: blue;
`;

const Product = () => {
  return (
    <Container>
      <ProductBox />
    </Container>
  );
};

export default Product;
