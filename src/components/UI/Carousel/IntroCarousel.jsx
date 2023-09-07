import React, {useState} from "react";
import {Carousel} from "antd";
import IMG1 from "../../../assets/images/carousel.png";
import "./intro.css";

const IntroCarousel = () => {
    return (
        <>
            <Carousel dotPosition={"bottom"} className="mt-8">
                <img src={IMG1} alt="item 1" className="slider" />
                <img src={IMG1} alt="item 1" className="slider" />
                <img src={IMG1} alt="item 1" className="slider" />
                <img src={IMG1} alt="item 1" className="slider" />
            </Carousel>
        </>
    );
};
export default IntroCarousel;
