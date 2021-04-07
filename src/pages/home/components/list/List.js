import ProductCard from "./items/ProductCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const List = (props) => {
  const { products, productClickHandler } = props;

  return (
    <Container>
      {products.map((element) => {
        return (
          <ProductCard
            productClickHandler={productClickHandler}
            key={element.id}
            product={element}
          />
        );
      })}
    </Container>
  );
};

export default List;
