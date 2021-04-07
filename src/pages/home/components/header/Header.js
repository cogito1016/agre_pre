import styled from "styled-components";
import CartButton from "./items/CartButton";

const Container = styled.div`
  border-bottom: 1px solid #f5f5f5;
`;

const MenuBar = styled.div`
  height: 30px;
  background-color: #f5f5f5;
`;

const Title = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  margin: 5px 0 10px 0;
  width: 120px;
  height: 50px;
`;

const LOGO_SRC = "https://image.wingeat.com/logo/images/we_logo_center.png";

const Header = () => {
  return (
    <Container>
      <MenuBar>
        <CartButton />
      </MenuBar>
      <Title>
        <Logo src={LOGO_SRC} />
      </Title>
    </Container>
  );
};

export default Header;
