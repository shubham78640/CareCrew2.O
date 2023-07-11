import React, { useContext } from "react";
import Profile from "../../components/Test/profile";
import HireSteps from "../../components/CandidateProfile/HireSteps/HireSteps";
import AboutCC from "../../components/CandidateProfile/AboutCC/AboutCC";
import Testimonial from "../../components/CandidateProfile/Testimonial/Testimonial";
import { multiStepContext } from "../../Context/FormContext";
import Footer from "../../components/Footer/Footer";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import { Box, Typography } from "@mui/material";
import AssociateInfo from "../../components/Test/AssociateInfo";

function HirePage() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

// setCloseForm(false);


  return (
    <>
      <Profile />
      <HireSteps />
      <AboutCC />
      <AssociateInfo/>
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
          Accordion_Content="After browsing through the profiles of our Home Associates, choose the one that matches your specific requirements and home setting."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel2"}
          newchnage={handleChange("panel2")}
          Accordion_Heading="Can I try the services before hiring?"
          Accordion_Content="Yes, you can schedule a free one-day trial to assess the compatibility and skills of our Home Associates."
        />

        <AccordionComponent
          Expend_Value={expanded === "pane13"}
          newchnage={handleChange("pane13")}
          Accordion_Heading="Are the Home Associates trained?"
          Accordion_Content="Absolutely! Our Associates have completed comprehensive training on the skills highlighted in their profiles. They have been trained by our experienced subject trainers, ensuring proficiency in their respective areas of expertise."
        />

        <AccordionComponent
          Expend_Value={expanded === "panel4"}
          newchnage={handleChange("panel4")}
          Accordion_Heading="What are the working hour options for hiring?"
          Accordion_Content="Our trained Home Associates are available for either a 12 or 24-hour role to cater to your specific needs. The same will also be mentioned in their profiles."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel5"}
          newchnage={handleChange("panel5")}
          Accordion_Heading="Can I request a replacement after deployment? "
          Accordion_Content="Yes, you can. While we wish for everything to be frictionless & train our Home Associates in a manner that they serve you professionally, we do offer replacements for up to a period of 6 months should such situations arise."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel6"}
          newchnage={handleChange("panel6")}
          Accordion_Heading="Can I extend the trial period to assess the skills of help further?"
          Accordion_Content="Yes, the trial period can be extended up to 3 days. The first day is free, after that, you can continue for up to two additional paid trial days."
        />
      </Box>

      <Footer />
    </>
  );
}

export default HirePage;
