import React, { Component } from "react";
import { Header, Feature, List } from "./components";
import axios from "axios";
import styled from "styled-components";

const endPoint = "https://node.wingeat.com/test-api/features";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featureImgs: [],
    };
  }

  componentDidMount() {
    this.getAndSetFeatureImgs();
  }

  getAndSetFeatureImgs = async () => {
    await axios.get(endPoint).then((response) => {
      const data = response.data;
      this.setState({
        featureImgs: data,
      });
    });
  };

  render() {
    const featureImgs = this.state.featureImgs;

    return (
      <div>
        <Header />
        <Container>
          <Feature featureImgs={featureImgs} />
          <List />
        </Container>
      </div>
    );
  }
}

export default Home;
