import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionComponent(props) {
  const { Accordion_Heading, Accordion_Content, Expend_Value } = props;
  return (
    <>
      <Accordion sx={{ padding: "20px", width: "85%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontWeight: "900",
              color: "#007a48",
              fontSize: "18px",
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
  );
}

export default AccordionComponent;
