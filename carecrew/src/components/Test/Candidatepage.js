import React, { useContext } from "react";
import Flickity from "../Crousel/Flickity";
import ServicesCards from "../HomePageComponents/ServicesCards";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Profile from './profile';
import TestDemocom from './TestDemocom';
import Navbaar from '../Headers/Navbaar';
import Testimo from './Testimo';
import Footer from '../Footer/Footer';
import StepsToHire from '../Home/StepsToHire';
import AccordionComponent from '../MuiComponents/AccordionComponent';
import { multiStepContext } from "../../Context/FormContext";
import MainComponent from "./PopUp";
import PopUp from "./PopUp";
import AboutCC from "../CandidateProfile/AboutCC/AboutCC";
import Testimonial from "../CandidateProfile/Testimonial/Testimonial";
import HireSteps from "../CandidateProfile/HireSteps/HireSteps";
import HireHelp from "../../Pages/HireHelp/HireHelp";
function Candidatepage() {

    const { closeForm, setCloseForm } = useContext(multiStepContext);
    const [expanded, setExpanded] = React.useState("panel1");
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
 
     <Profile/>
     <StepsToHire />
     <AboutCC/>
    <Testimonial/>
     <HireSteps/>
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
              Accordion_Heading="I have a 2 year old toddler. Will the nanny be well equipped to take care of him?"
              Accordion_Content="We understand that the skill & effort required in handling children varies depending on whether the child is an infant, a toddler or a schooler. Depending on who needs to be taken care of in your case, we will source & deploy a nanny who comes with the required experience & expertise, so that you can rest easy with her around your kid."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel2"}
              newchnage={handleChange("panel2")}
              Accordion_Heading="Would the nanny be comfortable in travelling with us out of town?"
              Accordion_Content="Some nannies may be comfortable in travelling with the family out of town, while some others may not. This should be clarified with the nanny at the time of the interview itself, so that you know what to expect. If you let us know this beforehand while sharing your requirements, we will source & deploy a nanny accordingly."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel3"}
              newchnage={handleChange("panel3")}
              Accordion_Heading="Will the nanny be comfortable in cleaning up, bathing & massaging the baby?"
              Accordion_Content="The scope of work in any deployment is not standard, rather it varies as per the needs of the customer and the agreement with the candidate. Basis your exact requirement, we will source & deploy a nanny accordingly."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel4"}
              newchnage={handleChange("panel4")}
              Accordion_Heading="Do you offer replacements if the nanny quits the job?"
              Accordion_Content="Yes, we do. While we wish for everything to be frictionless & train our helps in a manner that they serve you professionally, we do offer replacements up to a period of 6 months should such situations arise. "
            />
            <AccordionComponent
              Expend_Value={expanded === "panel5"}
              newchnage={handleChange("panel5")}
              Accordion_Heading="Can one opt for a trial?"
              Accordion_Content="Yes, we offer a paid trial of maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel6"}
              newchnage={handleChange("panel6")}
              Accordion_Heading="How many leaves do I need to give to the house help every month?"
              Accordion_Content="The number of paid leaves & the mechanism for availing them is left to the mutual agreement between the customer & the Associate. However, the Associate would be entitled to a minimum of 2 paid leaves per month."
            />
          </Box>

     <Footer />

<HireHelp/>
     <PopUp/>
    </>
  )
}

export default Candidatepage