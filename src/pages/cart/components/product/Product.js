import styled from "styled-components";
import ProductBox from "./items/ProductBox";

const Container = styled.div`
  width: 600px;
`;

const Product = () => {
  return (
    <Container>
      <ProductBox />
    </Container>
  );
};

export default Product;
