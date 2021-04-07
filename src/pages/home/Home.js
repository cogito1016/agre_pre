import React, { Component } from "react";
import { Header, Feature, List } from "./components";
import axios from "axios";
import styled from "styled-components";

const endPoint = process.env.REACT_APP_API;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featureImgs: [],
      products: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.getAndSetFeatureImgs();
    this.getAndSetProducts();
    this.addInfiniteScrollEvent();
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

  addInfiniteScrollEvent = () => {
    console.log("이벤트 리스너를 추가합니다");
    window.addEventListener("scroll", this.infiniteScrollEvent);
  };

  removeInfiniteScrollEvent = () => {
    console.log("이벤트 리스너를 제거합니다");
    window.removeEventListener("scroll", this.infiniteScrollEvent);
  };

  infiniteScrollEvent = () => {
    const { documentElement, body } = document;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    console.log(scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
      const newPage = this.state.page + 1;
      this.setState(
        {
          page: newPage,
        },
        this.getAndSetProducts
      );
    }
  };

  render() {
    const { featureImgs, products } = this.state;

    return (
      <div>
        <Header />
        <Container>
          <Feature featureImgs={featureImgs} />
          <List products={products} />
        </Container>
      </div>
    );
  }
}

export default Home;
