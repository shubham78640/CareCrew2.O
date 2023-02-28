import React, { useContext } from "react";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import { multiStepContext } from "../../Context/FormContext";
import TestDemoCom from "./TestDemocom";
import testimg from "../../Images/HK.jpg";
import { fontWeight } from "@mui/system";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Footer from "../Footer/Footer";
import HomeCrousel from "../Crousel/HomeCrousel";
import CradComponent from "../CardComponent/CradComponent";
import { CardsData } from "../../AllData";
function Test() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangejwewfw = () => {
    // return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
    window.location = "https://calendly.com/carecrewmeeting/30min";
  };
  return (
    <>
      <Box>
        <Box p={9} height="300px" width="100%">
          <Box
            mt={10}
            sx={{ fontSize: "30px", fontWeight: 900, color: "green" }}
          >
            Looking for someone to help manage your homes?
          </Box>
          <Box sx={{ fontSize: "20px", fontWeight: 400 }}>
            Hire 8-12 hour or 24-hour live-in helps for all your household
            chores with easy replacements and trials.{" "}
          </Box>
        </Box>
        <Box mt={-5}>
          <img width="100%" height="300" src={testimg} />
        </Box>
        <Box p={9} sx={{ display: "flex", justifyContent: "center" }}>
          <Box mt={1} sx={{ flexDirection: "row", flex: 2 }}>
            <Box sx={{ display: "flex" }}>
              <Box m={2} sx={{ flex: 2 }}>
                <Box
                  sx={{
                    marginLeft: "20PX",
                    fontSize: "25px",
                    fontWeight: 900,
                    color: "green",
                  }}
                >
                  What Do They Do?{" "}
                </Box>
                <Box p={1}>
                  <Box
                    mt={2}
                    sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                  >
                    {" "}
                    Full Home Cleaning
                  </Box>
                  <Box mt={1}>
                    &#8901; usting <br /> &#8901; Daily brooming & mopping{" "}
                    <br /> &#8901; Making bed <br /> &#8901; Washing &
                    Organizing utensils <br />
                  </Box>
                </Box>
                <hr />
                <Box p={1}>
                  <Box
                    mt={2}
                    sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                  >
                    {" "}
                    Laundry Services{" "}
                  </Box>
                  <Box mt={1}>
                    &#8901; usting <br /> &#8901; Daily brooming & mopping{" "}
                    <br /> &#8901; Making bed <br /> &#8901; Washing &
                    Organizing utensils <br />
                  </Box>
                </Box>
                <hr />
                <Box p={1}>
                  <Box
                    mt={2}
                    sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                  >
                    {" "}
                    Surface & Floor Cleaning{" "}
                  </Box>{" "}
                  <Box mt={1}>
                    &#8901; usting <br /> &#8901; Daily brooming & mopping{" "}
                    <br /> &#8901; Making bed <br /> &#8901; Washing &
                    Organizing utensils <br />
                  </Box>
                </Box>
                <hr />
                <Box p={1}>
                  <Box
                    mt={2}
                    sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                  >
                    {" "}
                    Equipment Management{" "}
                  </Box>
                  <Box mt={1}>
                    &#8901; usting <br /> &#8901; Daily brooming & mopping{" "}
                    <br /> &#8901; Making bed <br /> &#8901; Washing &
                    Organizing utensils <br />
                  </Box>
                </Box>
              </Box>
              <hr />
              <Box m={2} sx={{ flex: 1 }}>
                <Box
                  mt={4}
                  p={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "90px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    width="120"
                    height="120"
                    style={{ margiTop: "40px", borderRadius: "5px" }}
                    src={testimg}
                  />
                  <img
                    width="120"
                    height="120"
                    style={{ margiTop: "40px", borderRadius: "5px" }}
                    src={testimg}
                  />
                  <img
                    width="120"
                    height="120"
                    style={{ margiTop: "40px", borderRadius: "5px" }}
                    src={testimg}
                  />
                  <img
                    width="120"
                    height="120"
                    style={{ margiTop: "40px", borderRadius: "5px" }}
                    src={testimg}
                  />
                  {/* <img width="250" height="150" src={testimg} /> */}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              p="5%"
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: { sm: "-3%", xs: "-10%" },
                gap: "0px",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "#007a48", fontWeight: 600 }}
              >
                How Does It Work?
              </Typography>
              <TestDemoCom
                Expend_Value={expanded === "panel1"}
                newchnage={handleChange("panel1")}
                Accordion_Heading="3-Day Trial Period"
                Accordion_Content="Take a paid trial for 3 days to evaluate their skills and professionalism."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel2"}
                newchnage={handleChange("panel2")}
                Accordion_Heading="Hassle-Free Replacements"
                Accordion_Content="Reliable on-demand replacement."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel3"}
                newchnage={handleChange("panel3")}
                Accordion_Heading="Skilled Professionals"
                Accordion_Content="Continual on-the job training by professionals."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel4"}
                newchnage={handleChange("panel4")}
                Accordion_Heading="Verified Helps"
                Accordion_Content="Verified associates with no criminal background or flaws."
              />{" "}
              <TestDemoCom
                Expend_Value={expanded === "panel1"}
                newchnage={handleChange("panel1")}
                Accordion_Heading="3-Day Trial Period"
                Accordion_Content="Take a paid trial for 3 days to evaluate their skills and professionalism."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel2"}
                newchnage={handleChange("panel2")}
                Accordion_Heading="Hassle-Free Replacements"
                Accordion_Content="Reliable on-demand replacement."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel3"}
                newchnage={handleChange("panel3")}
                Accordion_Heading="Skilled Professionals"
                Accordion_Content="Continual on-the job training by professionals."
              />
              <TestDemoCom
                Expend_Value={expanded === "panel4"}
                newchnage={handleChange("panel4")}
                Accordion_Heading="Verified Helps"
                Accordion_Content="Verified associates with no criminal background or flaws."
              />{" "}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        p="2% 8%"
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          // marginLeft:"10%",
          // marginRight:"10%",
          textAlign: "center",
          flexDirection: { sm: "row", xs: "column" },
          fontSize:"13px",
         
       
        }}
      >
        <Box p={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Diligent
          </Box>
          <Box>all chores are completed quickly and accurately.</Box>
        </Box>
        <Box p={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Efficient
          </Box>
          <Box>work with a sense of urgency, plan ahead and anticipate</Box>
        </Box>
        <Box p={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Precision
          </Box>
          <Box>thorough cleaning to ensure no detail is overlooked.</Box>
        </Box>
        <Box p={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Non-intrusive
          </Box>
          <Box>
            ensuring that their presence is not disruptive or intrusive.
          </Box>
        </Box>
        <Box p={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Discrete
          </Box>
          <Box>respecting customer’s privacy at all times.</Box>
        </Box>
      </Box>

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
          Accordion_Content="Yes, we do. While we wish for everything to be frictionless & continually train our Associates in a manner that they serve you professionally, we do offer replacements should such situations arise."
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
      <Button onClick={handleChangejwewfw}>oye bbb</Button>
      <Footer />
    </>
  );
}

export default Test;
