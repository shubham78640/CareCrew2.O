import React from "react";
import Contact from "../../components/Contact/Contact";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Footer from "../../components/Footer/Footer";
import ImageChildCare from "../../Images/CC2.jpg";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";

function ChildCare_Services() {
  return (
    <>
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
                <Box sx={{ lineHeight: "30px" }}>
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
                <Box sx={{ lineHeight: "32px" }}>
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
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
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
              Accordion_Heading="I have a 2 year old toddler. Will the nanny be well equipped to take care of him?"
              Accordion_Content="We understand that the skill & effort required in handling children varies depending on whether the child is an infant, a toddler or a schooler. Depending on who needs to be taken care of in your case, we will source & deploy a nanny who comes with the required experience & expertise, so that you can rest easy with her around your kid."
            />
            <AccordionComponent
              Accordion_Heading="Would the nanny be comfortable in travelling with us out of town?"
              Accordion_Content="Some nannies may be comfortable in travelling with the family out of town, while some others may not. This should be clarified with the nanny at the time of the interview itself, so that you know what to expect. If you let us know this beforehand while sharing your requirements, we will source & deploy a nanny accordingly."
            />
            <AccordionComponent
              Accordion_Heading="Will the nanny be comfortable in cleaning up, bathing & massaging the baby?"
              Accordion_Content="The scope of work in any deployment is not standard, rather it varies as per the needs of the customer and the agreement with the candidate. Basis your exact requirement, we will source & deploy a nanny accordingly."
            />
            <AccordionComponent
              Accordion_Heading="Do you offer replacements if the nanny quits the job?"
              Accordion_Content="Yes, we do. While we wish for everything to be frictionless & continually train our Associates in a manner that they serve you professionally, we do offer replacements should such situations arise."
            />
            <AccordionComponent
              Accordion_Heading="Can one opt for a trial?"
              Accordion_Content="Yes, we offer a paid trial of maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
            />
            <AccordionComponent
              Accordion_Heading="How many leaves do I need to give to the house help every month?"
              Accordion_Content="The number of paid leaves & the mechanism for availing them is left to the mutual agreement between the customer & the Associate. However, the Associate would be entitled to a minimum of 2 paid leaves per month."
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
