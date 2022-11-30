import { Box, display, height } from "@mui/system";
import React from "react";
import image from "../Images/KM.png";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AccordionComponent from "../MuiComponents/AccordionComponent";

const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

function AskedQuestions() {
  return (
    <>
      <Box height="auto">
        <Grid container>
          <Grid item lg={6} xs={12}>
            <Item>
              <img width="200%" src={image} />
            </Item>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Item>
              <Box ml={3} mt={6} sx={{ fontSize: "18px", color: "#72bf44" }}>
                Know more
              </Box>
              <Box
                mr={29}
                ml={3}
                sx={{
                  fontSize: "34px",
                  fontWeight: "900",
                  color: "#007a48",
                  lineHeight: "32px",
                }}
              >
                Here are some frequently asked questions
              </Box>
              <Box
                mt={5}
                ml={3}
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <AccordionComponent 
                  Accordion_Heading="  Do you have people who can work in a 24-hour live-in
                      setting?"
                  Accordion_Content="  Yes, we provide full-time house helps in two formats:
                      either for 24 hour live-in jobs, or for 8-12 hour day
                      jobs."
                />
                <AccordionComponent
                  Accordion_Heading="   Where is CARE CREW based? Are the services offered
                      pan-India?"
                  Accordion_Content="  We are headquartered at Gurugram, Haryana and offer
                      services primarily in Delhi NCR. This includes the areas
                      of Delhi, Gurugram, Noida, Faridabad, Ghaziabad & Greater
                      Noida."
                />
                <AccordionComponent
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
                  Accordion_Heading="    Do you offer replacements if the house help quits the job?"
                  Accordion_Content="   Yes, we do. While we wish for everything to be
                      frictionless & train our helps in a manner that they serve
                      you professionally, we do offer replacements should such
                      situations arise."
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AskedQuestions;
