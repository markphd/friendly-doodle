import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Gallery = () => (
  <Carousel plugins={["arrows"]}>
    <img src={imageOne} />
    <img src={imageTwo} />
    <img src={imageThree} />
  </Carousel>
);

export default Gallery;
