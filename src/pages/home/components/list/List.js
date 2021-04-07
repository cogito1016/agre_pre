import ProductCard from "./items/ProductCard";
import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const List = () => {
  return (
    <Container>
      {/* I'm List */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};

export default List;
