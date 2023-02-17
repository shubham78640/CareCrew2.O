import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TestDemocom(props) {
    
  const { Accordion_Heading, Accordion_Content, Expend_Value,newchnage } = props;
  return (
    <>
    
    
    <Accordion  
      expanded={Expend_Value}
      onChange={newchnage}
        sx={{
          padding: "3px",
          width: { sm: "100%", xs: "100%" },
         // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "#007a48",
              fontSize: "10px",
            }}
          >
            {Accordion_Heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Accordion_Content}</Typography>
        </AccordionDetails>
      </Accordion>
    
    </>
  )
}

export default TestDemocom