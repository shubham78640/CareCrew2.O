import React, {useContext} from "react";
import Contact from "../../components/Contact/Contact";
import Box from "@mui/material/Box";
import DividerComponent from "../../components/DividerComponent/DividerComponent";
import Servies from "../../components/Services/Servies";
import Footer from "../../components/Footer/Footer";
import Imagedriving from "../../Images/driving2.jpg";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import Typography from "@mui/material/Typography";
import { multiStepContext } from "../../Context/FormContext";

function Driving_Services() {
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
            width: { sm: "30%", xs: "100%" }, display:{sm:"block", xs:"none"}
          }}
        >
          <DividerComponent sx={{ marginLeft: "20%" }} />
        </Box>
        <Box sx={{ width: { sm: "62%", xs: "100%" } ,marginTop:{sm:"11.5%", xs:"23%"}}}>
          <Servies
            Service_Heading="Drivers for your cars"
            Service_Content="We source licensed drivers for you, who combine good driving skills with proper driving etiquette. Whether it’s to drive your child to school or take your parents for a doctor’s appointment, you can relax with a family driver at your disposal."
            Service_image={Imagedriving}
            Training_Heading="Training"
            Training_Content={
              <Box sx={{ lineHeight: "30px" }}>
                The drivers, once deployed with you, undergo behavioural
                training with us where they’re taught the significance of
                personal grooming & hygiene. In addition to the basics of
                driving, we also reiterate the importance of traffic rules and
                regulations, following the road signs, the differences between
                driving a manual and automatic car, the importance of personal
                safety and lots more. We also train them on the importance of
                timely car maintenance and ensuring the cleanliness of the car
                as much on the inside as the outside.
              </Box>
            }
            Training_Heading1=""
            Training_Content1=""
            Training_Heading2=""
            Training_Content2=""
            Training_Heading3=""
            Training_Content3=""
            Values_Heading="Values"
            Values_Content="We intend to develop a fleet of drivers who are punctual, polite and value your time. They ought to understand boundaries and should not intrude in any manner while driving you around. "
            Stories_Heading="Stories"
            Stories_Content="Be it receiving your guests from the airport, taking your kids to school or picking you up from the office, our drivers are people you can rely upon."
            SubmitButtonName="Request a Call Back"
          />
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
            <AccordionComponent Expend_Value={expanded === 'panel1'} newchnage={handleChange('panel1')}
              Accordion_Heading="Would the driver be comfortable in travelling with us out of town?"
              Accordion_Content="Most drivers are comfortable travelling with the patrons out of town. However, we recommend you still clarify this with the driver at the time of the interview itself, just to be sure. Some drivers also seek additional wages for outstation travel and the same can be clarified beforehand. "
            />
            <AccordionComponent Expend_Value={expanded === 'panel2'} newchnage={handleChange('panel2')}
              Accordion_Heading="I have to travel a lot and need someone who can drive for 6 hours on a daily basis. Would your drivers be able to do that?"
              Accordion_Content="Apart from the number of hours on duty, the actual number of driving hours in a day are an important consideration from the perspective of anyone taking up the job. If you let us know this beforehand, we will try & look for someone accordingly."
            />
            <AccordionComponent Expend_Value={expanded === 'panel3'} newchnage={handleChange('panel3')}
              Accordion_Heading="Can the driver also help around with running errands & buying groceries?"
              Accordion_Content="The scope of work in any deployment is not standard, rather it varies as per the needs of the customer and the agreement with the candidate. Basis your exact requirement, we will source & deploy a driver accordingly."
            />
            <AccordionComponent Expend_Value={expanded === 'panel4'} newchnage={handleChange('panel4')}
              Accordion_Heading="Do you offer replacements if the driver quits the job?"
              Accordion_Content="Yes, we do. While we wish for everything to be frictionless & continually train our Associates in a manner that they serve you professionally, we do offer replacements should such situations arise."
            />
            <AccordionComponent Expend_Value={expanded === 'panel5'} newchnage={handleChange('panel5')}
              Accordion_Heading="Can one opt for a trial?"
              Accordion_Content="Yes, we offer a paid trial of maximum three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services."
            />
            <AccordionComponent Expend_Value={expanded === 'panel6'} newchnage={handleChange('panel6')}
              Accordion_Heading="How many leaves do I need to give to the driver every month?"
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

export default Driving_Services;
