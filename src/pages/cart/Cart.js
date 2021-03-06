import { Component } from "react";
import styled from "styled-components";
import { Calculator, Product } from "./components";

const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const CartTitle = styled.h1`
  margin: 40px 0 40px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const CartBox = styled.div`
  width: 650px;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const ZeroProductsBox = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #f23e42;
`;

class Cart extends Component {
  constructor() {
    super();
    this.state = { products: [], totalPrice: 0 };
  }

  componentDidMount() {
    this.getAndSetProductsInCart();
  }

  getAndSetProductsInCart = () => {
    const products = [];

    const localStorage = window.localStorage;
    const localStorageLength = localStorage.length;
    let count = 1;

    for (let key in localStorage) {
      if (localStorageLength < count) {
        break;
      }

      let value = JSON.parse(localStorage.getItem(key));
      products.push(value);
      count++;
    }

    this.setState(
      {
        products: products,
      },
      this.getAndSetTotalPrice
    );
  };

  getAndSetTotalPrice = () => {
    let totalPrice = 0;
    const products = this.state.products;

    products.forEach((product) => {
      if (product.checked) {
        totalPrice += product.price * product.quantityInCart;
      }
    });

    this.setState({
      totalPrice: totalPrice,
    });
  };

  productCheckHandler = (e, id) => {
    const product = JSON.parse(window.localStorage.getItem(id));
    const checked = e.target.checked;
    product.checked = checked;

    window.localStorage.setItem(id, JSON.stringify(product));

    this.getAndSetProductsInCart();
  };

  productQuantityControlHandler = (id, offset) => {
    const product = JSON.parse(window.localStorage.getItem(id));
    const quantity = product.quantityInCart + offset;

    if (quantity < 1) {
      return;
    }
    product.quantityInCart = quantity;
    window.localStorage.setItem(id, JSON.stringify(product));

    this.getAndSetProductsInCart();
  };

  productCancelHandler = (id) => {
    delete window.localStorage[id];

    this.getAndSetProductsInCart();
  };

  render() {
    const { products, totalPrice } = this.state;
    return (
      <Container>
        <CartTitle>????????????</CartTitle>

        {products.length === 0 ? (
          <ZeroProductsBox>??????????????? ?????? ????????? ??????</ZeroProductsBox>
        ) : (
          <div>
            <CartBox>
              {products.map((product) => {
                return (
                  <Product
                    product={product}
                    productCheckHandler={this.productCheckHandler}
                    productQuantityControlHandler={
                      this.productQuantityControlHandler
                    }
                    productCancelHandler={this.productCancelHandler}
                  />
                );
              })}
            </CartBox>
            <Calculator totalPrice={totalPrice} />
          </div>
        )}
      </Container>
    );
  }
}

export default Cart;
