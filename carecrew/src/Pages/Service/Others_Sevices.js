import React, { useContext } from "react";
import Contact from "../../components/Contact/Contact";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Footer from "../../components/Footer/Footer";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";
import { multiStepContext } from "../../Context/FormContext";

function Others_Sevices() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  const [expanded, setExpanded] = React.useState(false);

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
            Service_Heading="Any other household services"
            Service_Content={
              <Box sx={{ lineHeight: "35px" }}>
                {" "}
                <Box>
                  We have defined our core services as housekeeping, cooking,
                  child care, elder care & driving. However, our primary goal
                  being to help modern families simplify their routines in every
                  way possible, we will be happy to take other requirements as
                  well, falling in the realm of household services.
                </Box>
                <Box mt={4} mb={-10}>
                  You may reach out to us for gardeners, butlers, caretakers,
                  pet walkers, helpers for pregnancy & mother care, & other such
                  roles.
                </Box>
              </Box>
            }
            SubmitButtonName="Request a Call Back"
          />
          <Box
            p="5%"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              mt: { sm: "-3%", xs: "-10%" },
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
              Accordion_Heading="Do you have people who can work in a 24-hour live-in setting?"
              Accordion_Content="Yes, we provide full-time house helps in two formats: either for 24 hour live-in jobs, or for 8-12 hour day jobs. We also provide part-time house helps."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel2"}
              newchnage={handleChange("panel2")}
              Accordion_Heading="Do you offer replacements if the house help quits the job?"
              Accordion_Content="Yes, we do. While we wish for everything to be frictionless & continually train our Associates in a manner that they serve you professionally, we do offer replacements should such situations arise."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel3"}
              newchnage={handleChange("panel3")}
              Accordion_Heading="Can one opt for a trial?"
              Accordion_Content="Yes, we offer a paid trial period of maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
            />
            <AccordionComponent
              Expend_Value={expanded === "panel4"}
              newchnage={handleChange("panel4")}
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

export default Others_Sevices;
