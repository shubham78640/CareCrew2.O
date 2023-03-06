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

  // const handleChangejwewfw = () => {
  //   // return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
  //   window.location = "https://calendly.com/carecrewmeeting/30min";
  // };
  return (
    <>
      <Box>
        <Box pt={9} sx={{ display: "flex" }}>
          <Box m={11} sx={{ width: "30%" }}>
            <Box sx={{ fontSize: "33px", fontWeight: 600, color: "#007a48" }}>
              Dependable Housekeepers For Your Home
            </Box>
            <Box
              mt={2}
              sx={{ fontSize: "22px", fontWeight: 600, color: "#007a48" }}
            >
              Looking for someone to help manage your homes?
            </Box>
            <Box mt={2} sx={{ fontSize: "17px" }}>
              Hire 8-12 hour or 24-hour live-in helps for all your household
              chores with easy replacements and trials.{" "}
            </Box>
            <Button
              sx={{ marginLeft: "10%", marginTop: "10%" }}
              variant="contained"
              color="success"
            >
              {" "}
              Submit here
            </Button>
          </Box>
          <Box mt={5} sx={{ width: "70%" }}>
            {" "}
            <img
              width="100%"
              height="450px"
              src="https://pscstaffing.com/wp-content/uploads/2019/07/Housekeeping-PSC-Staffing.jpg"
            />
          </Box>
        </Box>

        <Box
          p={4}
          mt={-10}
          sx={{
            display: "flex",
            gap: "5%",
            justifyContent: "center",
            position: { sm: "sticky", xs: "static" },
            top: 102,
            right: 0,
            backgroundColor: "white",
          }}
        >
          <img
            width="100"
            height="100"
            style={{ margiTop: "80px", borderRadius: "5px" }}
            src="https://tse3.mm.bing.net/th?id=OIP.cxt5W9JtqyxWHe0SmFclGwHaE7&pid=Api&P=0"
          />{" "}
          <img
            width="100"
            height="100"
            style={{ margiTop: "80px", borderRadius: "5px" }}
            src="https://tse2.mm.bing.net/th?id=OIP.4Khx1EOSCbmqhoQOwT6vsgHaE3&pid=Api&P=0"
          />{" "}
          <img
            width="100"
            height="100"
            style={{ margiTop: "80px", borderRadius: "5px" }}
            src="https://tse1.mm.bing.net/th?id=OIP.bymDbxFpXLHQbB7VpbWvMQHaEK&pid=Api&P=0"
          />{" "}
          <img
            width="100"
            height="100"
            style={{ margiTop: "80px", borderRadius: "5px" }}
            src={testimg}
          />{" "}
          <img
            width="100"
            height="100"
            style={{ margiTop: "80px", borderRadius: "5px" }}
            src="https://tse2.mm.bing.net/th?id=OIP.-v3SyyQx8QGrqYRVSZjIlgHaE8&pid=Api&P=0"
          />
        </Box>

        <Box p={9} sx={{ display: "flex", justifyContent: "center", gap: "" }}>
          <Box mt={1} sx={{ flexDirection: "row", flex: 2 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 2, zIndex: -1 }}>
                <Box
                  sx={{
                    marginLeft: "20%",
                    fontSize: "25px",
                    fontWeight: 900,
                    color: "green",
                    fontSize: "29px",
                  }}
                >
                  What Do They Do?{" "}
                </Box>
                <Box
                  mt={4}
                  width="100%"
                  p={1}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Box>
                    <Box
                      mt={2}
                      sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                    >
                      {" "}
                      Full Home Cleaning
                    </Box>
                    <Box mt={1} sx={{ color: "#545454", fontWeight: 400 }}>
                      • Dusting <br /> • Daily brooming & mopping <br /> •
                      Making bed <br /> • Washing & Organizing utensils <br />
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <img
                      width="120"
                      height="120"
                      style={{ margiTop: "80px", borderRadius: "5px" }}
                      src={testimg}
                    />
                  </Box>
                </Box>
                <hr width="67%" style={{ marginLeft: "10%" }} />

                <Box
                  width="100%"
                  p={1}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Box width="31%">
                    <Box
                      mt={2}
                      sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                    >
                      {" "}
                      Laundry Services
                    </Box>
                    <Box mt={1} sx={{ color: "#545454", fontWeight: 400 }}>
                      • Washing, drying & ironing <br /> • Folding and
                      organising fabrics and garments <br />
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <img
                      width="120"
                      height="120"
                      style={{ margiTop: "40px", borderRadius: "5px" }}
                      src="https://tse1.mm.bing.net/th?id=OIP.z0qJdTuM6VtkylXoiStOSAHaE7&pid=Api&P=0"
                    />
                  </Box>
                </Box>
                <hr width="67%" style={{ marginLeft: "10%" }} />

                <Box
                  width="100%"
                  p={1}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Box width="31%">
                    <Box
                      mt={2}
                      sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                    >
                      {" "}
                      Deep & Occasional Cleaning
                    </Box>
                    <Box mt={1} sx={{ color: "#545454", fontWeight: 400 }}>
                      • Carpets and sofas cleaning <br /> • Windows and blinds
                      cleaning <br /> • Post-construction clean-up
                      <br />
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <img
                      width="120"
                      height="120"
                      style={{ margiTop: "40px", borderRadius: "5px" }}
                      src="https://spotonmaids.com/wp-content/uploads/2017/06/house-cleaning.jpg"
                    />
                  </Box>
                </Box>
                <hr width="67%" style={{ marginLeft: "10%" }} />

                <Box
                  width="100%"
                  p={1}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Box width="31%">
                    <Box
                      mt={2}
                      sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                    >
                      {" "}
                      Equipment Management
                    </Box>
                    <Box mt={1} sx={{ color: "#545454", fontWeight: 400 }}>
                      <Box>
                        {" "}
                        • Organising and managing housekeeping equipments
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <img
                      width="120"
                      height="120"
                      style={{ margiTop: "0px", borderRadius: "5px" }}
                      src="https://tse2.mm.bing.net/th?id=OIP.T17DU1AYXwgK__oPXqPxHAHaD4&pid=Api&P=0"
                    />
                  </Box>
                </Box>
                <hr width="67%" style={{ marginLeft: "10%" }} />
                <Box
                  width="100%"
                  p={1}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Box width="31%">
                    <Box
                      mt={2}
                      sx={{ fontSize: "20px", fontWeight: 700, color: "green" }}
                    >
                      {" "}
                      Other Customised Services
                    </Box>
                    <Box mt={1} sx={{ color: "#545454", fontWeight: 400 }}>
                      • Customised services tailored as per requirements
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <img
                      width="120"
                      height="120"
                      style={{ margiTop: "0px", borderRadius: "5px" }}
                      src="https://5.imimg.com/data5/SX/WG/TA/SELLER-11738453/corporate-housekeeping-services-500x500.png"
                    />
                  </Box>
                </Box>
                <hr width="67%" style={{ marginLeft: "10%" }} />
              </Box>
            </Box>
          </Box>
          <div>
            <Box
              width="80%"
              sx={{
                flex: 1,
                position: { sm: "sticky", xs: "static" },
                top: 260,
                right: 10,
                zIndex: -1,
              }}
            >
              <Box
                p="2%"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // mt: { sm: "-3%", xs: "-10%" },
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
                  Expend_Value={expanded === "panel11"}
                  newchnage={handleChange("panel1")}
                  Accordion_Heading="3-Day Trial Period"
                  Accordion_Content="Take a paid trial for 3 days to evaluate their skills and professionalism."
                />
                <TestDemoCom
                  Expend_Value={expanded === "panel12"}
                  newchnage={handleChange("panel2")}
                  Accordion_Heading="Hassle-Free Replacements"
                  Accordion_Content="Reliable on-demand replacement."
                />
                <TestDemoCom
                  Expend_Value={expanded === "panel13"}
                  newchnage={handleChange("panel3")}
                  Accordion_Heading="Skilled Professionals"
                  Accordion_Content="Continual on-the job training by professionals."
                />
                <TestDemoCom
                  Expend_Value={expanded === "panel14"}
                  newchnage={handleChange("panel4")}
                  Accordion_Heading="Verified Helps"
                  Accordion_Content="Verified associates with no criminal background or flaws."
                />{" "}
                <TestDemoCom
                  Expend_Value={expanded === "panel15"}
                  newchnage={handleChange("panel1")}
                  Accordion_Heading="Transparent Process"
                  Accordion_Content="Take a paid trial for 3 days to evaluate their skills and professionalism."
                />
                <TestDemoCom
                  Expend_Value={expanded === "panel16"}
                  newchnage={handleChange("panel2")}
                  Accordion_Heading="Zero Registration Fee"
                  Accordion_Content="Reliable on-demand replacement."
                />
                <TestDemoCom
                  Expend_Value={expanded === "panel7"}
                  newchnage={handleChange("panel3")}
                  Accordion_Heading="Relationship Officer"
                  Accordion_Content="Continual on-the job training by professionals."
                />
                <TestDemoCom
                  Expend_Value={expanded === "panel18"}
                  newchnage={handleChange("panel4")}
                  Accordion_Heading="On-the-job Online Training
                  "
                  Accordion_Content="Verified associates with no criminal background or flaws."
                />{" "}
              </Box>
            </Box>
          </div>
        </Box>
      </Box>

      <Button
        sx={{ marginLeft: "45%", zIndex: -1 }}
        variant="contained"
        color="success"
      >
        {" "}
        Submit here
      </Button>
      <Box
        p="2% 8%"
        sx={{
          width: "93%",
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          textAlign: "center",
          flexDirection: { sm: "row", xs: "column" },
          fontSize: "13px",
        }}
      >
        <Box
          p={2}
          width="200px"
          height="180px"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Diligent
          </Box>
          <Box>all chores are completed quickly and accurately.</Box>
        </Box>
        <Box
          p={2}
          width="200px"
          height="180px"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Efficient
          </Box>
          <Box>work with a sense of urgency, plan ahead and anticipate</Box>
        </Box>
        <Box
          p={2}
          width="200px"
          height="180px"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Precision
          </Box>
          <Box>thorough cleaning to ensure no detail is overlooked.</Box>
        </Box>
        <Box
          p={2}
          width="200px"
          height="180px"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <Box p={3} sx={{ fontSize: "16px", fontWeight: 700, color: "green" }}>
            Non-intrusive
          </Box>
          <Box>
            ensuring that their presence is not disruptive or intrusive.
          </Box>
        </Box>
        <Box
          p={2}
          width="200px"
          height="180px"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
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
          Accordion_Heading="We live in a joint family with 10 members. Can we get a 24 hour house help for housekeeping & cooking?"
          Accordion_Content="The effort & time required in cooking for a large family would be significantly high, which will leave little time for any other work, thus making the prospect of both housekeeping & cooking being done by the same person untenable. We strongly recommend having at least two different helps in such cases."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel2"}
          newchnage={handleChange("panel2")}
          Accordion_Heading="Will the house help be able to adjust her cooking style to our preferences?"
          Accordion_Content="Food is a matter of individual tastes & preferences, which can vary dramatically across cultures, regions or age groups. As part of our continuous training, we sensitize our Associates to the importance of being flexible in their approach to cooking to suit the customer’s preferences. However, there would still be a small learning curve for any new help entering your home to fully attune herself to your preferences and cook food in a manner most desirable to you."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel3"}
          newchnage={handleChange("panel3")}
          Accordion_Heading="Will the cook also clean the dishes?"
          Accordion_Content="The scope of work in any deployment is not standard, rather it varies as per the needs of the customer and the agreement with the candidate. Not all cooks may be comfortable with cleaning the dishes, as that is often done by a housekeeper. However, basis your exact requirement, we will source & deploy a house help accordingly."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel4"}
          newchnage={handleChange("panel4")}
          Accordion_Heading="Do you offer replacements if the house help quits the job?"
          Accordion_Content="Yes, we do. While we wish for everything to be frictionless & train our helps in a manner that they serve you professionally, we do offer replacements up to a period of 6 months should such situations arise."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel5"}
          newchnage={handleChange("panel5")}
          Accordion_Heading="Can one opt for a trial?"
          Accordion_Content="Yes, we offer a paid trial for maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
        />
        <AccordionComponent
          Expend_Value={expanded === "panel6"}
          newchnage={handleChange("panel6")}
          Accordion_Heading="How many leaves do I need to give to the house help every month?"
          Accordion_Content="The number of paid leaves & the mechanism for availing them is left to the mutual agreement between the customer & the Associate. However, the Associate would be entitled to a minimum of 2 paid leaves per month"
        />
      </Box>
      <Footer />
    </>
  );
}

export default Test;
