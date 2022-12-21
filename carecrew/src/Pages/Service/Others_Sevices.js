import React from "react";
import Contact from "../../components/Contact/Contact";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Navbaar from "../../components/Headers/Navbaar";
import Footer from "../../components/Footer/Footer";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";

function Others_Sevices() {
  return (
    <>
      <Navbaar />
      <Box
        mb="5%"
        sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}
      >
        <Box
          sx={{
            width: { sm: "30%", xs: "100%" },
          }}
        >
          <DividerComponent sx={{ marginLeft: "20%" }} />
        </Box>
        <Box mt="12%" sx={{ width: { sm: "62%", xs: "100%" } }}>
          <Servies
            Service_Heading="Any other household services"
            Service_Content={
              <Box sx={{ lineHeight: "35px" }}>
                {" "}
                <Box>
                  We have defined our core services as housekeeping, cooking,
                  child care, elder care & driving. However, our primary goal
                  being to help modern families simplify their routines in every
                  way possible, we will be happy to take other requirements as
                  well, falling in the realm of household services.
                </Box>
                <Box mt={4}>
                  You may reach out to us for gardeners, butlers, caretakers,
                  pet walkers, helpers for pregnancy & mother care, & other such
                  roles.
                </Box>
              </Box>
            }
            Service_image=""
            Training_Heading=""
            Training_Content=""
            Training_Heading1=""
            Training_Content1=""
            Training_Heading2=""
            Training_Content2=""
            Training_Heading3=""
            Training_Content3=""
            Values_Heading=""
            Values_Content=""
            Stories_Heading=""
            Stories_Content=""
          />
          <Box
            mt="-20%"
            p="5%"
            sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#007a48", fontWeight: 600 }}
            >
              Frequently asked questions
            </Typography>
            <AccordionComponent
              Accordion_Heading="Do you have people who can work in a 24-hour live-in setting?"
              Accordion_Content=""
            />
            <AccordionComponent
              Accordion_Heading="Do you offer replacements if the house help quits the job?"
              Accordion_Content=""
            />
            <AccordionComponent
              Accordion_Heading="Can one opt for a trial?"
              Accordion_Content=""
            />
            <AccordionComponent
              Accordion_Heading="How many leaves do I need to give to the house help every month?"
              Accordion_Content=""
            />
          </Box>
        </Box>
      </Box>
      <Contact />
      <Footer />
    </>
  );
}

export default Others_Sevices;    