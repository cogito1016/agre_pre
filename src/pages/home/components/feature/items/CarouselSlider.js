import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const endPoint = "https://image.wingeat.com";

const CarouselSlider = (props) => {
  const featureImgs = props.featureImgs;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          paddingBottom: "40px",
        }}
      >
        <ul style={{ float: "right" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {featureImgs.map((element, idx) => {
        return <img key={idx} src={`${endPoint}/${element.image}`}></img>;
      })}
    </Slider>
  );
};

export default CarouselSlider;
