import React from "react";
import "./Slider.css";

const Slider = () => {
  //function MyComponent() {
    const images = [
      process.env.PUBLIC_URL + "/images/Image1.jpg",
      process.env.PUBLIC_URL + "/images/Image2.jpg",
      //process.env.PUBLIC_URL + "/images/image3.jpg",
    ];
  
    return (
      <div>
        <Slider images={sliderImages} />
        {/* Your other content */}
      </div>
    );
  }
  
  //export default MyComponent;

export default Slider;