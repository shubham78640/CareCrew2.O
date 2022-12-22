import React from "react";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Navbaar from "../../components/Headers/Navbaar";
import Footer from "../../components/Footer/Footer";
import ImageCooking from "../../Images/HK2.jpg";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";
import Contact from "../../components/Contact/Contact";

function Housekeeping_Service() {
  return (
    <>
      <Box mb="5%" sx={{ display: "flex", flexDirection: {  sm: "row", xs: "column" } }}>
        <Box
          sx={{
            width: { sm: "30%", xs: "100%" },
          }}
        >
          <DividerComponent sx={{ marginLeft: "20%" }} />
        </Box>
        <Box mt="12%" sx={{ width: { sm: "62%", xs: "100%" } }}>
          <Servies
            Service_Heading="Housekeepers for your home "
            Service_Content="We source housekeepers who can keep your homes in order by performing multiple household chores including sweeping, mopping & dusting. We train them to operate with professionalism and precision. We also teach them how to do the laundry & keep the home equipment in good condition."
            Service_image={ImageCooking}
            Training_Heading="Training"
            Training_Content="The housekeepers, once deployed with you, will receive training in three areas:"
            Training_Heading1={
              <span style={{ color: "#007a48" }}>
                &#x2713; &nbsp;Basics Of Housekeeping
              </span>
            }
            Training_Content1="The fundamentals include making a bed, dusting different kinds of surfaces, washing and organizing utensils in the kitchen, sweeping, brooming & mopping of common areas in the house."
            Training_Heading2={
              <span style={{ color: "#007a48" }}>
                &#x2713; &nbsp;Laundry Management
              </span>
            }
            Training_Content2="This includes knowledge about the different types of laundry chemicals and their usage, washing and drying of clothes, their ironing, folding and storage."
            Training_Heading3={
              <span style={{ color: "#007a48" }}>
                &#x2713; &nbsp;Equipment Management
              </span>
            }
            Training_Content3="The housekeepers not only learn the operational know-how of cleaning equipment but also an understanding of how to maintain them with care."
            Values_Heading="Values"
            Values_Content="We intend to make our housekeepers diligent in their approach & efficient at managing the household chores. We try to inculcate in them an attention to detail that helps keep your home organized at all times. We expect them to be non-intrusive & discrete while at work, in line with our principle of respecting your privacy."
            Stories_Heading="Stories"
            Stories_Content="Let’s say you require somebody to help you reorganize your living area or set up an indoor garden – the housekeepers will help you do it."
          />
          <Box
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
              Accordion_Heading="Would washroom cleaning be included in the scope of work for the Associate?"
              Accordion_Content="The scope of work in any deployment is not standard, rather it varies as per the needs of the customer and the agreement with the candidate. Some house helps may be comfortable cleaning washrooms, while some may be not. Basis your exact requirement, we will source & deploy a house help accordingly."
            />
            <AccordionComponent
              Accordion_Heading="I have pets. Would the housekeeper be able to take care of them?"
              Accordion_Content="The scope of work in any deployment is not standard, rather it varies as per the needs of the customer and the agreement with the candidate. Some house helps may be comfortable with pets, while some may be not. Basis your exact requirement, we will source & deploy a house help accordingly."
            />
            <AccordionComponent
              Accordion_Heading="Do you have people who can work in a 24-hour live-in setting?"
              Accordion_Content="Yes, we provide full-time house helps in two formats: either for 24 hour live-in jobs, or for 8-12 hour day jobs."
            />
            <AccordionComponent
              Accordion_Heading="Do you offer replacements if the house help quits the job?"
              Accordion_Content="Yes, we do. While we wish for everything to be frictionless & continually train our Associates in a manner that they serve you professionally, we do offer replacements should such situations arise."
            />
            <AccordionComponent
              Accordion_Heading="Can one opt for a trial?"
              Accordion_Content="How many leaves do I need to give to the house help every month?"
            />
            <AccordionComponent
              Accordion_Heading="How many leaves do I need to give to the house help every month?"
              Accordion_Content="Yes, we offer a paid trial period of three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
            />
          </Box>
        </Box>
      </Box>
      <Contact />
      <Footer />
    </>
  );
}

export default Housekeeping_Service;
