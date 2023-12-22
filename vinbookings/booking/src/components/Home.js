
import * as React from 'react';
import "./Home.css";

import { useState,useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const sliderImages = [
    {
      url: "https://static.toiimg.com/photo/105240225.cms",
    },
    {
      url: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101613184/101613184.jpg",
    },
    {
      url: "https://kannada.cdn.zeenews.com/kannada/sites/default/files/2023/03/02/288292-kannada-movie.png",
    },
    {
      url: "https://static.toiimg.com/thumb/msid-103612838,width-1070,height-580,imgsize-85560,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    },
    {
      url: "https://images.ottplay.com/images/tovino-thomas-and-nimisha-sajayan-0.jpg",
    },
  ];
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  const autoSlide = () => {
    nextSlide();
  };

  useEffect(() => {
    const intervalId = setInterval(autoSlide,1000);
    return () => clearInterval(intervalId);
  }, [activeImageNum]);
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div >
      <div className='hi'>
        <section className="image-slider">
          <div className="left">
            <ArrowBackIosIcon onClick={prevSlide} />
          </div>
          <div className="right">
            <ArrowForwardIosIcon onClick={nextSlide} />
          </div>
          {sliderImages.map((currentSlide, ind) => {
            return (
              <div
                className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                key={ind}
              >
                {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
              </div>
            );
          })}
        </section>
        <form className="regis">
        <h2>
          Welcome!!! My dear cinephile.
        </h2>
        <h4>
        Cinema is generally a branch of art that uses dialogue, 
        editing, the scene's layout, light, sound, and decor by the film made.
        Cinematography, the art of motion-picture photography · Film or movie, a series of still images that create the illusion of moving image
        </h4>
        </form>
       
      </div>
    </div>
    
      );
}
      export default Home