import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Flickity.css";
import { dataDigitalBestSeller } from "../../AllData";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from "react-router-dom";
// import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
// import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
// import ChildCareIcon from "@mui/icons-material/ChildCare";
// import ElderlyIcon from "@mui/icons-material/Elderly";
// import DriveEtaIcon from "@mui/icons-material/DriveEta";
// import AddCircleIcon from "@mui/icons-material/AddCircle";

function Flickity() {
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
    <div className="App">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
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
            </div>
            <div className="card-bottom">
              <p>{item.paragraph}</p>
              <NavLink style={{textDecoration:"none"}} to={item.link}  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}>
              <span className="category">
                <span
                  style={{
                    width:"25px",
                    height:"25px",
                    display:"flex",
                    padding:"4px",
                    alignItems:"center",
                    justifyContent:"center",
                    background: "#007a48",
                    borderRadius: "50%",
                    color: "white",
                    fontWeight: "999",
                  }}
                >
                  <ArrowForwardIosIcon fontSize="6px"  />
                </span>
                {item.category}
              </span>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Flickity;
