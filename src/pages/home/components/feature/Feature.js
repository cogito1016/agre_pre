import React from "react";
import styled from "styled-components";
import CarouselSlider from "./items/CarouselSlider";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Feature = (props) => {
  return (
    <Container>
      <CarouselSlider featureImgs={props.featureImgs} />
    </Container>
  );
};

export default Feature;
