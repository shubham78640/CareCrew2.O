import React, { useContext } from "react";
import Contact from "../../components/Contact/Contact";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Footer from "../../components/Footer/Footer";
import ImageCooking from "../../Images/HK2.jpg";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import { multiStepContext } from "../../Context/FormContext";
import HowitWorksComponents from "../../components/HowItWorksComponents/HowitWorksComponents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const BOX = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    textAlign: "justify",
    alignItems: "center",
    flexBasis: "260px",
  });
  
  const BOX2 = styled(Box)({
    background: "white",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "rgba(0,122,72) 0px 5px, rgba(0,122,72) 0px 10px, rgba(0,122,72) 0px 15px",
    "&:hover": {
      background: "#73bf45",
    },
  });
  
  const H3 = styled("h6")({
    color: "#73bf45",
    letterSpacing:"-.2px",
  });
function On_Demand_Services() {

    const { closeForm, setCloseForm } = useContext(multiStepContext);
    const [expanded, setExpanded] = React.useState("panel1");
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Box
        mb="5%"
        sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}
      >
        <Box
          sx={{
            width: { sm: "30%", xs: "100%" },
            display: { sm: "block", xs: "none" },
          }}
        >
          <DividerComponent sx={{ marginLeft: "20%" }} />
        </Box>
        <Box
          sx={{
            width: { sm: "62%", xs: "100%" },
            marginTop: { sm: "11.5%", xs: "23%" },
          }}
        >
          <Servies
            Service_Heading="On-Demand Services for instant home needs"
            Service_Content="We provide on-demand services to solve for the challenges you face when your House Help is on leave. Whether you need assistance with Housekeeping or Cooking, our trained professionals are ready to step in and take care of your home."
            Service_image={ImageCooking}
            Training_Heading="Types of On-Demand Services"
            Training_Content="Our on-demand services offer a convenient solution at an affordable price of INR 149 per hour."
            Training_Heading1={
                <span style={{ color: "#007a48" }}>
                  &#x2713; &nbsp;Housekeeping
                </span>
              }
            Training_Content1="
                We have trained housekeeping professionals who ensure the space is clean, organised and comfortable. The service includes regular cleaning tasks such as sweeping, mopping, dusting, washroom, and window cleaning. 
            "
            Training_Heading2={
                <span style={{ color: "#007a48" }}>
                  &#x2713; &nbsp;Cooking
                </span>
              }
            Training_Content2="
           
                Treat yourself to delicious home-style cooked meals prepared by our skilled home cooks. With our on-demand cooking service, you can savour North Indian and South Indian dishes prepared with love and precision.
       
            "
            Training_Heading3={
              <span style={{ color: "#007a48" }}>
                &#x2713; &nbsp;Driving
              </span>
            }
            Training_Content3="We have licensed drivers ready to cater to your transportation needs. Whether it's running errands, meeting friends, or picking up and dropping someone off, our on-demand driving services offer a convenient and reliable solution."
            Values_Heading="Values"
            Values_Content="Whether it’s our meticulous Housekeepers or skilled Home Cooks, our trained professionals embody the values of reliability, efficiency and a strong work ethic. Through our on-demand services, we ensure that every aspect of the job is carried out with professionalism and dedication."
            Stories_Heading="Stories"
            Stories_Content="Be it a busy schedule, special occasions or an unexpected leave taken by your Help, our on-demand services step in to provide the support you need, ensuring that your home is well taken care of."
            SubmitButtonName="Book a service"
          />
          <Box
            p="5%"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              mt: { sm: "0%", xs: "0%" },
            }}
          >
          <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#007a48", fontWeight: 600 }}
            >
              How does it work?

            </Typography>
            <Box>Booking our on-demand service is easy and can be done in 3 simple steps. </Box>

            <Box
        mt={5}
        sx={{ display: "flex", gap:"2%", flexDirection: { sm: "row", xs: "column" } }}
      >
         <a
                  href="https://api.whatsapp.com/send?phone=919643328358"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  target="_blank"
                >
        <BOX>
          <BOX2>
            <WhatsAppIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Send us a message on WhatsApp</H3>
        </BOX>
        </a>
     
        <BOX>
          <BOX2>
            <SocialDistanceIcon
              sx={{ color: "rgba(0,122,72)", fontSize: "28px" }}
            />
          </BOX2>
          <H3>Share your requirements</H3>
        </BOX>

        <BOX>
          <BOX2>
            <HandshakeIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Get a confirmation of your booking</H3>
        </BOX>

       
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
              Accordion_Heading="What is the pricing for an on-demand service?"
              Accordion_Content="Our on-demand service is priced at Rs. 149 per hour (plus GST)."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel2"}
              newchnage={handleChange("panel2")}
              Accordion_Heading="Do you require prior notice for booking an on-demand service?"
              Accordion_Content="Yes, we would appreciate a notice at least two hours prior to the booking so that we can ensure a smooth operation."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel3"}
              newchnage={handleChange("panel3")}
              Accordion_Heading="What areas do you cover for on-demand services?"
              Accordion_Content="We offer on-demand services in and around Golf Course Extention Road, Gurugram."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel4"}
              newchnage={handleChange("panel4")}
              Accordion_Heading="What are your service hours for on-demand services?"
              Accordion_Content="We provide our on-demand services from 10 am to 4 pm."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel5"}
              newchnage={handleChange("panel5")}
              Accordion_Heading="What types of cleaning tasks are included in housekeeping services?"
              Accordion_Content="Our housekeeping services include regular cleaning tasks such as sweeping, mopping, dusting, washroom and window cleaning."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel6"}
              newchnage={handleChange("panel6")}
              Accordion_Heading="What types of dishes are included in cooking services?"
              Accordion_Content="Our cooking services include home-cooked North and South Indian dishes."
            />
          </Box>
        </Box>
      </Box>
      <Contact />
      <Footer />



    </>
  )
}

export default On_Demand_Services