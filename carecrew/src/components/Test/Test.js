import React, { useContext } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { multiStepContext } from "../../Context/FormContext";
import TestDemoCom from "./TestDemocom";
import testimg from "../../Images/HK.jpg";
import { fontWeight } from "@mui/system";
function Test() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box>
        <Box border={2} p={9} sx={{ display: "flex" }}>
          <Box border={2} mt={10} sx={{ flexDirection: "row", flex: 2 }}>
            <Box sx={{ display: "flex" }}>
              <Box m={2} border={2} sx={{ flex: 2 }}>
                <Box sx={{ marginTop: "", fontSize: "20px", fontWeight: 900 }}>
                  hii this is for test{" "}
                </Box>
                <Box>
                  lorem NewsSportsCricketWoman arrested after being accused of
                  attacking Prithvi Shaw's car Woman arrested after being
                  accused of attacking India cricketer Prithvi Shaw's car Sapna
                  Gill, one of the 8 people who were detained by Oshiwada Police
                  in Mumbai for attacking the car of Prithvi Shaw's friend, was
                  arrested on Thursday, February 16. Prithvi Shaw had denied
                  selfies to the group while having dinner at a hotel before a
                  scuffle broke out. India Today Web Desk India Today Web Desk
                  UPDATED: Feb 16, 2023 18:57 IST NewsSportsCricketWoman
                  arrested after being accused of attacking Prithvi Shaw's car
                  Woman arrested after being accused of attacking India
                </Box>
                <Box m={2} border={2} sx={{ flex: 2 }}>
                <Box sx={{ marginTop: "", fontSize: "20px", fontWeight: 900 }}>
                  hii this is for test{" "}
                </Box>
                <Box>
                  lorem NewsSportsCricketWoman arrested after being accused of
                  attacking Prithvi Shaw's car Woman arrested after being
                  accused of attacking India cricketer Prithvi Shaw's car Sapna
                  Gill, one of the 8 people who were detained by Oshiwada Police
                  in Mumbai for attacking the car of Prithvi Shaw's friend, was
                  arrested on Thursday, February 16. Prithvi Shaw had denied
                  selfies to the group while having dinner at a hotel before a
                  scuffle broke out. India Today Web Desk India Today Web Desk
                  UPDATED: Feb 16, 2023 18:57 IST NewsSportsCricketWoman
                  arrested after being accused of attacking Prithvi Shaw's car
                  Woman arrested after being accused of attacking India
                </Box>
              </Box>
              </Box>
              <Box m={2} border={2} sx={{ flex: 1 }}>
                <img width="300" height="300" src={testimg} />
              </Box>
             </Box>
            </Box>


            

          <Box border={2} mt={10} sx={{ flex: 1 }}>
            <Box
              p="5%"
              sx={{
                display: "flex",
                flexDirection: "column",

                mt: { sm: "-3%", xs: "-10%" },
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "#007a48", fontWeight: 600 }}
              >
                For Demo purposes
              </Typography>
              <TestDemoCom
                Expend_Value={expanded === "panel1"}
                newchnage={handleChange("panel1")}
                Accordion_Heading="Do you have people who can work in a 24-hour live-in setting?"
                Accordion_Content="Yes, we provide full-time house helps in two formats: either for 24 hour live-in jobs, or for 8-12 hour day jobs. We also provide part-time house helps."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel2"}
                newchnage={handleChange("panel2")}
                Accordion_Heading="Do you offer replacements if the house help quits the job?"
                Accordion_Content="Yes, we do. While we wish for everything to be frictionless & continually train our Associates in a manner that they serve you professionally, we do offer replacements should such situations arise."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel3"}
                newchnage={handleChange("panel3")}
                Accordion_Heading="Can one opt for a trial?"
                Accordion_Content="Yes, we offer a paid trial period of maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel4"}
                newchnage={handleChange("panel4")}
                Accordion_Heading="How many leaves do I need to give to the house help every month?"
                Accordion_Content="The number of paid leaves & the mechanism for availing them is left to the mutual agreement between the customer & the Associate. However, the Associate would be entitled to a minimum of 2 paid leaves per month."
              />{" "}
              <TestDemoCom
                Expend_Value={expanded === "panel3"}
                newchnage={handleChange("panel3")}
                Accordion_Heading="Can one opt for a trial?"
                Accordion_Content="Yes, we offer a paid trial period of maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Test;