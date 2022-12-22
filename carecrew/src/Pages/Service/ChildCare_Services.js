import React from "react";
import Contact from "../../components/Contact/Contact";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Navbaar from "../../components/Headers/Navbaar";
import Footer from "../../components/Footer/Footer";
import ImageChildCare from "../../Images/CC2.jpg";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";

function ChildCare_Services() {
  return (
    <>
      <Box mb="5%" sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}>
        <Box
          sx={{
            width: { sm: "30%", xs: "100%" },
          }}
        >
          <DividerComponent sx={{ marginLeft: "20%" }} />
        </Box>
        <Box mt="12%" sx={{ width: { sm: "62%", xs: "100%" } }}>
          <Servies
            Service_Heading="Nannies for your little ones "
            Service_Content="We understand that parenting can be a challenging task, and all parents can do with a bit of help. This is why we source nannies & babysitters who are experienced in taking care of young children & who understand their needs. "
            Service_image={ImageChildCare}
            Training_Heading="Training"
            Training_Content="The nannies, once deployed with you, are trained further to focus on the child’s health, growth, development & safety."
            Training_Heading1=""
            Training_Content1={
              <Box ml={-2.5} sx={{ display: "flex", gap: "10px" }}>
                <Box style={{ color: "#007a48", fontWeight: "900" }}>
                  {" "}
                  &#x2713;{" "}
                </Box>
                <Box sx={{lineHeight:"30px"}}>
                  From bathing to feeding to pram walking, our nannies are
                  trained on all basic tasks - big or small. We have different
                  training modules for different stages of a child’s
                  developmental cycle.
                </Box>
              </Box>
            }
            Training_Heading2=""
            Training_Content2={
              <Box ml={-2.5} sx={{ display: "flex", gap: "10px" }}>
                <Box style={{ color: "#007a48", fontWeight: "900" }}>
                  {" "}
                  &#x2713;{" "}
                </Box>
                <Box sx={{lineHeight:"32px"}}>
                  Apart from physiological needs & hygiene, our training covers
                  aspects of food and nutrition, socio-emotional wellbeing,
                  safety and first-aid & cognitive development of a child.
                </Box>
              </Box>
            }
            Training_Heading3=""
            Training_Content3=""
            Values_Heading="Values"
            Values_Content="We intend to make our nannies develop reserves of patience – so whether it is about taking care of an inconsolable child or putting a hyperactive kid to sleep, they have you covered. We expect them to be hugely empathetic and able to put themselves in the parents’ shoes when taking care of the kids. They should be able to engage the child in playful, growth-focused activities while you’re away."
            Stories_Heading="Stories"
            Stories_Content="Whether it’s an office meeting, kid-free gym session or an imperative grocery run – our nannies will make sure you attend to your commitments free of worries."
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
              Accordion_Heading="I have a 2 year old toddler. Will the nanny be well equipped to take care of him?"
              Accordion_Content=""
            />
            <AccordionComponent
              Accordion_Heading="Would the nanny be comfortable in travelling with us out of town?"
              Accordion_Content=""
            />
            <AccordionComponent
              Accordion_Heading="Will the nanny be comfortable in cleaning up, bathing & massaging the baby?"
              Accordion_Content=""
            />
            <AccordionComponent
              Accordion_Heading="Do you offer replacements if the nanny quits the job?"
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

export default ChildCare_Services;
