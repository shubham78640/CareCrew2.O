import React, { useContext } from "react";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Footer from "../../components/Footer/Footer";
import ImageCooking from "../../Images/C2.jpg";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";
import { multiStepContext } from "../../Context/FormContext";
import HowitWorksComponents from "../../components/HowItWorksComponents/HowitWorksComponents";
function Cooking_Services() {
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
            Service_Heading="Cooks for your family"
            Service_Content="We source for you home cooks who know how to prepare wholesome, home-style meals for your families to enjoy every day. Whether you are looking to introduce variety in your everyday meals or want to start eating healthy, we train them to adapt to your needs. We teach them the art of using oils & spices in reasonable quantities, while ensuring that taste is not compromised."
            Service_image={ImageCooking}
            Training_Heading="Training"
            Training_Content="The home cooks, once deployed with you, will undergo elaborate training covering everything from the basics of cooking to learning about food in its entirety."
            Training_Heading1=""
            Training_Content1={
              <Box ml={-2.5} sx={{ display: "flex", gap: "10px" }}>
                {" "}
                <Box style={{ color: "#007a48", fontWeight: "900" }}>
                  {" "}
                  &#x2713;{" "}
                </Box>{" "}
                <Box sx={{ lineHeight: "25px" }}>
                  Before the actual cooking happens, they are introduced to the
                  fundamentals of running an Indian kitchen, using measuring
                  equipment & kitchen appliances, understanding the nutritious
                  value & life span of food - both cooked and raw, hygiene &
                  safety in a kitchen and so on.
                </Box>
              </Box>
            }
            Training_Heading2=""
            Training_Content2={
              <Box ml={-2.5} sx={{ display: "flex", gap: "10px" }}>
                {" "}
                <Box style={{ color: "#007a48", fontWeight: "900" }}>
                  {" "}
                  &#x2713;{" "}
                </Box>{" "}
                <Box sx={{ lineHeight: "25px" }}>
                  Once they’ve perfected that, our cooks learn the art of
                  accurate measurement of spices and its preparation, storage of
                  processed ingredients, how to make base Indian gravies for
                  curries and dal, cooking methodologies, types of meat &
                  vegetables along with their cuts and everything there is to
                  know about preparing fresh food.
                </Box>
              </Box>
            }
            Training_Heading3=""
            Training_Content3=""
            Values_Heading="Values"
            Values_Content="We intend to make our cooks detail-oriented, who can quickly adapt their style of cooking to suit your likings. They should be able to ensure the appropriate usage of salt, oil & other essential cooking ingredients. We also want them to cook the right quantity so that there’s minimum wastage of food."
            Stories_Heading="Stories"
            Stories_Content="From simple meals on weekdays to special delightful ones over the weekend, our cooks will attempt to bring in variety in your everyday food. Spicy or occasionally spicy; crisp rotis or soft ones – they will be able to customize as per your needs."
            SubmitButtonName="Book a Trial"
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

          <HowitWorksComponents/>

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
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Cooking_Services;
