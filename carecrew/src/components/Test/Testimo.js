import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Crousel/Flickity.css";
import { dataDigitalBestSeller1 } from "../../AllData";
import { NavLink } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
function Testimo() {

    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault:
          "https://www.bing.com/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&w=161&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2",
      }));
    };
  return (
    <>
    
    <div  >
        
      <Slider {...settings}>
        {dataDigitalBestSeller1.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
              {/* <h6>Age : {item.title}</h6> */}
          
            </div>
            <div className="card-bottom">
              {/* <p>{item.paragraph}</p> */}
              
              <NavLink style={{textDecoration:"none"}} to={item.link}  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}>
                                  <p>{item.paragraph}</p>
                      <Stack spacing={1}>
                      <Rating  name="read-only" defaultValue={5} precision={0.5} readOnly />
                      </Stack>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
    
    </>
  )
}

export default Testimo