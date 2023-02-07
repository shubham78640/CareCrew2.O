import { Box } from "@mui/system";
import React from "react";
import image from "../../Images/KM.jpg";
import { styled } from "@mui/material/styles";
import AccordionComponent from "../MuiComponents/AccordionComponent";

const Item = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundImage: `url(${image})`,
  marginTop: "70px",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
}));

function AskedQuestions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Item
        sx={{
          p: { sm: "100px", xs: "10px" },
          justifyContent: { xs: "center" },
          gap: "30px",
        }}
      >
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            ml: { sm: 90 },
            display: "grid",
            gap: { sm: 5, xs: 1 },
          }}
        >
          <AccordionComponent
            Expend_Value={expanded === "panel1"}
            newchnage={handleChange("panel1")}
            Accordion_Heading="  Do you have people who can work in a 24-hour live-in
                      setting?"
            Accordion_Content="  Yes, we provide full-time house helps in two formats:
                      either for 24 hour live-in jobs, or for 8-12 hour day
                      jobs. We also provide part-time house helps."
          />
          <AccordionComponent
            Expend_Value={expanded === "panel2"}
            newchnage={handleChange("panel2")}
            Accordion_Heading="   Where is CARE CREW based? Are the services offered
                      pan-India?"
            Accordion_Content="  We are headquartered at Gurugram, Haryana and offer
                      services primarily in Delhi NCR. This includes the areas
                      of Delhi, Gurugram, Noida, Faridabad, Ghaziabad & Greater
                      Noida."
          />
          <AccordionComponent
            Expend_Value={expanded === "panel3"}
            newchnage={handleChange("panel3")}
            Accordion_Heading="    Do I need to pay any upfront charges before hiring
                      somebody from CARE CREW?"
            Accordion_Content="   No, we don’t charge any registration fee or commission
                      upfront. Once we find a candidate for you, you can take a
                      3 day trial. Post the trial, you pay a non-refundable
                      one-time fee of Rs.1999 + GST to sign a contract with us &
                      get the candidate deployed. Subsequent monthly billing
                      shall comprise of the help's salary & our monthly
                      subscription fee of Rs.999 + GST."
          />
          <AccordionComponent
            Expend_Value={expanded === "panel4"}
            newchnage={handleChange("panel4")}
            Accordion_Heading="    Do you offer replacements if the house help quits the job?"
            Accordion_Content="   Yes, we do. While we wish for everything to be
                      frictionless & train our helps in a manner that they serve
                      you professionally, we do offer replacements should such
                      situations arise."
          />
        </Box>
      </Item>
    </>
  );
}

export default AskedQuestions;
