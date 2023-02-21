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
                 	&#9830;  arrested after being accused of
                  
    
                </Box>
                <Box>
                 	&#9830; NewsSportsCricketWoman arrested after bein
                  
    
                </Box>
                <Box>
                 	&#9830; NewsSportsCricketWoman arrested after being accused of
                  
    
                </Box>
                <Box>
                 	&#9830; NewsSportsCricketWoman 
                   abcd
    
                </Box>
               
                <Box sx={{ marginTop: "19px", fontSize: "20px", fontWeight: 900 }}>
                  hii this is for test{" "}
                </Box>
                <Box>
                 	&#9830; NewsSportsCricketWoman arrested after being 
               
                </Box>
             
                <Box>
                 	&#9830; NewsSportsCricketWoman arrested after
               
                </Box>
                <Box>
                 	&#9830; NewsSpord after b
               
                </Box>
                <Box>
                 	&#9830; NewsS arrested after being accused of
               
                </Box>
                 <Box>
                 	&#9830; NewsSportsCricketWoman  being accused of
               
                </Box>
              </Box>
              <Box m={2} border={2} sx={{ flex: 1,  }}>
                <Box border={2} p={2} sx={{display:"flex", flexDirection:"column", gap:"20px", justifyContent:"center", alignItems:"center"}}>
                <img width="150" height="150" src={testimg} />
                <img width="150" height="150" src={testimg} />
                </Box>
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
