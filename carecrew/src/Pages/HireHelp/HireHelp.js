import React, { useContext } from "react";
import { multiStepContext } from "../../Context/FormContext";
import HireSteps from "../../components/CandidateProfile/HireSteps/HireSteps";
import AboutCC from "../../components/CandidateProfile/AboutCC/AboutCC";
import Testimonial from "../../components/CandidateProfile/Testimonial/Testimonial";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Footer from "../../components/Footer/Footer";
import HomeCrousel from "../../components/Crousel/HomeCrousel";
import Profile from "../../components/Test/profile";
function HireHelp() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <>
      <Profile/>
      <HireSteps />
      <AboutCC />
      <Testimonial />
    
      <Box
        p="5%"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          mt: { sm: "0%", xs: "5%" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#007a48", fontWeight: 600 }}
        >
          Frequently asked questions
        </Typography>
        <AccordionComponent
          Expend_Value={expanded === "panel1"}
          newchnage={handleChange("panel1")}
          Accordion_Heading="How do I select a suitable house help?"
          Accordion_Content="After browsing through the profiles of our house helps, choose the one that matches your specific requirements and home setting."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel2"}
          newchnage={handleChange("panel2")}
          Accordion_Heading="Can I try the services before hiring?"
          Accordion_Content="Yes, you can schedule a free one-day trial to assess the compatibility and skills of our house helps."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel3"}
          newchnage={handleChange("panel3")}
          Accordion_Heading=" What are the working hour options for hiring?"
          Accordion_Content="Our trained house helps are available for either a 12 or 24 hours role to cater to your specific needs. The same will also be mentioned in their profiles."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel4"}
          newchnage={handleChange("panel4")}
          Accordion_Heading="Can I request a replacement after deployment? "
          Accordion_Content="Yes, we offer  replacements for up to six months after the first deployment until you find the right help for your home. "
        />
        <AccordionComponent
          Expend_Value={expanded === "panel5"}
          newchnage={handleChange("panel5")}
          Accordion_Heading="Can I extend the trial period to assess the skills of help further?"
          Accordion_Content="Yes, the trial period can be extended. The first day is free, after that, you can continue for up to two additional paid trial days."
        />
      </Box>

      <Footer />
    </>
  );
}

export default HireHelp;
