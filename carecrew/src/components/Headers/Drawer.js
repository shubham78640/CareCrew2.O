import React from 'react'
import CCHorizontal from "../../Images/CCHorizontal.png"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));


const BOX = styled(Box)({
 display:"flex",
 flexDirection:"column",
 gap:"10px"
})

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function Drawer() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    }
  return (
    <>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <div id="offcanvasRightLabel">
        <img width={"30%"} src={CCHorizontal} alt="" />
    </div>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    {/* containt writing */}
  <div>
        <AccordionSummary>
          <Typography>Home</Typography>
        </AccordionSummary>
 
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          About Us
        </AccordionSummary>
        <AccordionDetails>
        <BOX>
            <div>Mission</div>
            <div>Vision</div>
            <div>Values</div>
            <div>Team</div>
        </BOX>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How It Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <BOX>
            <div>Process</div>
            <div>FAQs</div>
         </BOX>
        </AccordionDetails>
      </Accordion>

      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          Contact Us
     </AccordionSummary>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Jobs</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <BOX>
            <div>Join Us</div>
            <div>हमसे जुड़े</div>
         </BOX>
        </AccordionDetails>
      </Accordion>

      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          Blogs
      </AccordionSummary>
         
     
    </div>
  </div>
</div>
    </>
    )}