import React, { Component } from "react";
import { Header, Feature, List } from "./components";
import axios from "axios";
import styled from "styled-components";

const endPoint = process.env.REACT_APP_API;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const ListTitle = styled.h1`
  margin: 40px 0 80px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featureImgs: [],
      products: [],
      page: 1,
      productQuantityInCart: 0,
    };
  }

  componentDidMount() {
    this.getAndSetFeatureImgs();
    this.getAndSetProducts();
    this.addInfiniteScrollEvent();
    this.firstRunInfiniteEventWhenWillMount();
    this.setTotalProductsQuantityInCart();
  }

  componentWillUnmount() {
    this.removeInfiniteScrollEvent();
  }

  getAndSetFeatureImgs = async () => {
    await axios.get(`${endPoint}/features`).then((response) => {
      const data = response.data;
      this.setState({
        featureImgs: data,
      });
    });
  };

  getAndSetProducts = async () => {
    const page = this.state.page;

    await axios.get(`${endPoint}/items?page=${page}`).then((response) => {
      const products = this.state.products;
      const newProducts = products.concat(response.data);

      this.setState({
        products: newProducts,
      });
    });
  };

  setTotalProductsQuantityInCart = () => {
    let total = 0;

    const localStorage = window.localStorage;
    const localStorageLength = localStorage.length;
    let count = 1;

    for (let key in localStorage) {
      if (localStorageLength < count) {
        break;
      }

      let value = parseInt(localStorage.getItem(key));
      total += value;
      count++;
    }

    this.setState({
      productQuantityInCart: total,
    });
  };

  firstRunInfiniteEventWhenWillMount = () => {
    this.infiniteScrollEvent();
  };

  addInfiniteScrollEvent = () => {
    console.log("이벤트 리스너를 추가합니다");
    window.addEventListener("scroll", this.infiniteScrollEvent);
  };

  removeInfiniteScrollEvent = () => {
    console.log("이벤트 리스너를 제거합니다");
    window.removeEventListener("scroll", this.infiniteScrollEvent);
  };

  checkValidation = (page) => {
    const MAX_PAGE = 6;

    if (page >= MAX_PAGE) {
      return false;
    }

    return true;
  };

  infiniteScrollEvent = () => {
    const page = this.state.page;

    if (!this.checkValidation(page)) {
      return;
    }

    const { documentElement, body } = document;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      const newPage = page + 1;
      this.setState(
        {
          page: newPage,
        },
        this.getAndSetProducts
      );
    }
  };

  productClickHandler = (product) => {
    alert("장바구니에 상품을 추가하였습니다.");

    this.checkAndSetProductToCart(product);
    this.setTotalProductsQuantityInCart();
  };

  checkAndSetProductToCart = (product) => {
    let value = 1;

    const originValue = window.localStorage.getItem(product.id);
    if (originValue !== null) {
      value = parseInt(originValue) + 1;
    }

    window.localStorage.setItem(product.id, value);
  };

  render() {
    const { featureImgs, products, productQuantityInCart } = this.state;

    return (
      <div>
        <Header productQuantityInCart={productQuantityInCart} />
        <Container>
          <Feature featureImgs={featureImgs} />
          <ListTitle>윙잇 MADE</ListTitle>
          <List
            products={products}
            productClickHandler={this.productClickHandler}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
