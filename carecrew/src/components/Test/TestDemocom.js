import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
function TestDemocom(props) {
  const { Accordion_Heading, Accordion_Content, Expend_Value, newchnage } =
    props;
  return (
    <>
      <Accordion
        expanded={Expend_Value}
        onChange={newchnage}
        sx={{
          padding: "3px",
          width: { sm: "100%", xs: "100%" },
          //  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          //  borderRadius:"5px"
        }}
      >
        <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        // aria-controls="panel1a-content"
        // id="panel1a-header"
        >
          {/* <Typography
           
          > */}
          <Box
            sx={{
              color: "#007a48",
              fontSize: "18px",
            }}
          >
            {Accordion_Heading}
          </Box>
          {/* </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Box>{Accordion_Content}</Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default TestDemocom;
