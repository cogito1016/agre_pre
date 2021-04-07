import React, { Component } from "react";
import { Header, Feature, List } from "./components";
import axios from "axios";

const endPoint = "https://node.wingeat.com/test-api/features";

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
        <Feature featureImgs={featureImgs} />
        <List />
      </div>
    );
  }
}

export default Home;
