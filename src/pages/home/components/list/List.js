import ProductCard from "./items/ProductCard";
import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const List = (props) => {
  const products = props.products;

  return (
    <Container>
      {/* I'm List */}
      {products.map((element) => {
        return <ProductCard product={element} />;
      })}
    </Container>
  );
};

export default List;
