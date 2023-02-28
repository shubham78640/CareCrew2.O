import { Box } from "@mui/system";
import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Item
        sx={{
          backgroundSize: { sm: "100%" },
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
            gap: { sm: 1, xs: 1 },
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
            Accordion_Heading=" Do I need to pay any upfront charges before hiring somebody from CARE CREW?"
            Accordion_Content="No, we don’t charge any registration fee or commission before deployment of your Associate at your place. Once we find a candidate for you, you can take a 3 day trial. Post the trial, you pay us the Associate’s one month salary + 18% GST upfront to sign a contract with us and get your Associate deployed."
          />
          <AccordionComponent
            Expend_Value={expanded === "panel4"}
            newchnage={handleChange("panel4")}
            Accordion_Heading="Do you offer replacement if the househelp quits the job?"
            Accordion_Content="Yes, we do. While we wish for everything to be frictionless & train our helps in a manner that they serve you professionally, we do offer replacements up to a period of 6 months should such situations arise. Whenever you raise a replacement request, we shall take up to 5 days to share a candidate’s profile. If you are not happy with the candidate shared, we shall source further profiles up to a maximum of 3 profiles. We will need up to 5 days to share any new profile."
          />
        </Box>
      </Item>
    </>
  );
}

export default AskedQuestions;
