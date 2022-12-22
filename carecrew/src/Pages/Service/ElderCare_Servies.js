import React from 'react'
import Contact from '../../components/Contact/Contact'
import Box from "@mui/material/Box";
import DividerComponent from '../../components/DividerComponent/DividerComponent';
import Servies from '../../components/Services/Servies';
import Navbaar from '../../components/Headers/Navbaar';
import Footer from '../../components/Footer/Footer';
import ImageElderCare from "../../Images/eldercare_service.jpg";
import AccordionComponent from '../../components/MuiComponents/AccordionComponent';
import Typography from "@mui/material/Typography";

function ElderCare_Servies() {
  return (
    <>
       <Box mb="5%" sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }} >
        <Box
         sx={{ 
            width: { sm: "30%", xs: "100%",  }
        }}
          ><DividerComponent  sx={{marginLeft:"20%",}} /></Box>
        <Box mt="12%" sx={{ width: { sm: "62%", xs: "100%" } }}>
          <Servies
            Service_Heading="Caregivers for elders"
            Service_Content="Whether it’s for your parents or grandparents, we source experienced caregivers or attendants for taking care of elders at your home. They will assist the seniors in their daily routines and keep them company. This will not only help them live a comfortable life but also relieve your anxiety about taking proper care of the seniors at home."
            Service_image={ImageElderCare}
            Training_Heading="Training"
            Training_Content= "The caregivers, once deployed with you, are trained on multiple aspects of elder care." 
            Training_Heading1=""
            Training_Content1= {<Box ml={-2.5} sx={{ display: "flex", gap: "10px" }}>
            <Box style={{ color: "#007a48", fontWeight: "900" }}>
              {" "}
              &#x2713;{" "}
            </Box>
            <Box sx={{lineHeight:"30px"}}>In addition to assisting the elders with daily activities, our caregivers are trained to run errands for them, prepare meals of their choice, support them on walks, manage doctor’s appointments and more.</Box></Box>}
            Training_Heading2=""
            Training_Content2={<Box ml={-2.5} sx={{ display: "flex", gap: "10px" }}>
            <Box style={{ color: "#007a48", fontWeight: "900" }}>
              {" "}
              &#x2713;{" "}
            </Box>
            <Box sx={{lineHeight:"30px"}}>Our caregivers are also trained on how to check vitals like blood pressure, sugar level, heart rate and the likes. They are also taught how to keep track of their medications and ensure timely consumption by the elders.</Box></Box>}
            Training_Heading3=""
            Training_Content3=""
            Values_Heading="Values"
            Values_Content="We intend to build a pool of caregivers who operate with empathy and compassion. While primarily assisting elders with their daily routines, they will also act as companions who are patient listeners. They should be highly reliable, willing to support the senior members of a family at each step of the way."
            Stories_Heading="Stories"
            Stories_Content="Let’s say you’ve moved in to a different city (or a country) and need someone to take care of your parents at home; CARE CREW will help you out. Our caregivers will take care of your elder family members while you’re away with diligence and sincerity."
          />
<Box p="5%" sx={{display:"flex", flexDirection:"column", gap:"30px"}} > 
<Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#007a48", fontWeight: 600 }}
        >
        Frequently asked questions
        </Typography>
              <AccordionComponent 
           Accordion_Heading="Are your elder caregivers equipped to give medical advice or medical care?"
           Accordion_Content=""
          />
              <AccordionComponent 
           Accordion_Heading="Will the caregiver be able to drive my parents to the hospital?"
           Accordion_Content=""
          />
               <AccordionComponent 
           Accordion_Heading="Will the caregiver be comfortable in bathing & massaging the elder?"
           Accordion_Content=""
          />
              <AccordionComponent 
           Accordion_Heading="Do you offer replacements if the caregiver quits the job?"
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
      <Contact/>
      <Footer />
    </>
  )
}

export default ElderCare_Servies