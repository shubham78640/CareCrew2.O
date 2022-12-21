import React from 'react'
import Box from "@mui/material/Box";
import DividerComponent from '../../components/DividerComponent/DividerComponent';
import Servies from '../../components/Services/Servies';
import Navbaar from '../../components/Headers/Navbaar';
import Footer from '../../components/Footer/Footer';
import ImageCooking from "../../Images/C2.jpg";
import AccordionComponent from '../../components/MuiComponents/AccordionComponent';
import Typography from "@mui/material/Typography";
import Process from '../../components/Process/Process';


function Cooking_Services() {
  return (
    <> 
     <Navbaar />
       <Box mb="5%" sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }} >
        <Box
         sx={{ 
            width: { sm: "30%", xs: "100%",  }
        }}
          ><DividerComponent  sx={{marginLeft:"20%",}}   /></Box>
        <Box mt="12%" sx={{ width: { sm: "62%", xs: "100%" } }}>
          <Servies
            Service_Heading="Cooks for your family"
            Service_Content="We source for you home cooks who know how to prepare wholesome, home-style meals for your families to enjoy every day. Whether you are looking to introduce variety in your everyday meals or want to start eating healthy, we train them to adapt to your needs. We teach them the art of using oils & spices in reasonable quantities, while ensuring that taste is not compromised."
            Service_image={ImageCooking}
            Training_Heading="Training"
            Training_Content="The home cooks, once deployed with you, will undergo elaborate training covering everything from the basics of cooking to learning about food in its entirety."
            Training_Heading1=""
            Training_Content1={<Box ml={-2.5} sx={{display:"flex",gap:"10px"}}> <Box style={{ color: "#007a48", fontWeight:"900"}}> &#x2713; </Box> <Box sx={{lineHeight:"25px"}}>Before the actual cooking happens, they are introduced to the fundamentals of running an Indian kitchen, using measuring equipment & kitchen appliances, understanding the nutritious value & life span of food - both cooked and raw, hygiene & safety in a kitchen and so on.</Box></Box>}
            Training_Heading2=""
            Training_Content2={<Box ml={-2.5} sx={{display:"flex",gap:"10px"}}> <Box style={{ color: "#007a48",fontWeight:"900"}}> &#x2713; </Box> <Box sx={{lineHeight:"25px"}}>Once they’ve perfected that, our cooks learn the art of accurate measurement of spices and its preparation, storage of processed ingredients, how to make base Indian gravies for curries and dal, cooking methodologies, types of meat & vegetables along with their cuts and everything there is to know about preparing fresh food.</Box></Box>}
            Training_Heading3=""
            Training_Content3=""
            Values_Heading="Values"
            Values_Content="We intend to make our cooks detail-oriented, who can quickly adapt their style of cooking to suit your likings. They should be able to ensure the appropriate usage of salt, oil & other essential cooking ingredients. We also want them to cook the right quantity so that there’s minimum wastage of food."
            Stories_Heading="Stories"
            Stories_Content="From simple meals on weekdays to special delightful ones over the weekend, our cooks will attempt to bring in variety in your everyday food. Spicy or occasionally spicy; crisp rotis or soft ones – they will be able to customize as per your needs."
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
           Accordion_Heading="We live in a joint family with 10 members. Can we get a 24 hour house help for housekeeping & cooking?"
           Accordion_Content=""
          />
              <AccordionComponent 
           Accordion_Heading="Will the house help be able to adjust her cooking style to our preferences?"
           Accordion_Content=""
          />
               <AccordionComponent 
           Accordion_Heading="Will the cook also clean the dishes?"
           Accordion_Content=""
          />
              <AccordionComponent 
           Accordion_Heading="Do you offer replacements if the house help quits the job?"
           Accordion_Content=""
          />
               <AccordionComponent 
           Accordion_Heading="Can one opt for a trial?
           "
           Accordion_Content=""
          />
              <AccordionComponent 
           Accordion_Heading="How many leaves do I need to give to the house help every month?"
           Accordion_Content=""
          />
          </Box>
        </Box>
      </Box>
      <Footer />

      <Process/>
    </>
  )
}

export default Cooking_Services

