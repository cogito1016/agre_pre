import React, { Component } from "react";
import { Header, Feature, List } from "./components";
import axios from "axios";
import styled from "styled-components";

const featuresEndPoint = "https://node.wingeat.com/test-api/features";
const productEndPoint = "https://node.wingeat.com/test-api/items";

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
    };
  }

  componentDidMount() {
    this.getAndSetFeatureImgs();
    this.getAndSetProducts();
  }

  getAndSetFeatureImgs = async () => {
    await axios.get(featuresEndPoint).then((response) => {
      const data = response.data;
      this.setState({
        featureImgs: data,
      });
    });
  };

  getAndSetProducts = async () => {
    await axios.get(`${productEndPoint}?page=1`).then((response) => {
      const data = response.data;
      this.setState({
        products: data,
      });
    });
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
