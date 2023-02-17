import { Box, Button, styled, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import HomeCrousel from "../Crousel/HomeCrousel";
import VerifiedIcon from "@mui/icons-material/Verified";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Flickity from "../Crousel/Flickity";
import StepsToHire from "./StepsToHire";
import AboutUs from "./AboutUs";
import AskedQuestions from "../HomePageComponents/AskedQuestions";
import Footer from "../Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { multiStepContext } from "../../Context/FormContext";
import ServicesCards from "../HomePageComponents/ServicesCards";
import Weprovide from "./Weprovide";



function Home() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);

  // const [closeForm, setCloseForm] = useState(true)

  const handleOpen = () => {
    setCloseForm(true);
  };

  const handleClose = () => {
    // setCloseForm(false)
  };

  console.log("data", closeForm);
  return (
    <>
      <ScrollToTop smooth color="green" />
      <HomeCrousel />
      <Weprovide/>
      {/* <Flickity /> */}
      <ServicesCards/>
      <StepsToHire />
      <AboutUs />
      <AskedQuestions />
      <Footer />
      <ScrollToTop smooth color="green" />
    </>
  );
}

export default Home;
