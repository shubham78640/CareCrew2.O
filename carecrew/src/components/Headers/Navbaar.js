import React from 'react'
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Home from '../Home/Home';
import CCLogo from "../../Images/CCLogo.png"
import { Tab } from '@mui/material';
import HomeCrousel from '../Crousel/HomeCrousel';


function Navbaar() {
  return (
    <Box>
      <Box padding={1.5} sx={{ backgroundColor: "#72bf44", display: "flex", alignItems: "center", width: "100%", position:"fixed" }}>
        <CallIcon fontSize='6px' sx={{ color: "yellow", marginLeft: "25%" }} /> &nbsp;
        <Box sx={{ color: "yellow", fontSize: "12px", fontWeight: "400" }}>
          <span style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>Call us:</span>&nbsp;080-6201-2086
        </Box>
        <hr style={{ height: "15px", marginLeft: "30px", border: "dashed black", width: "0.5px" }} />
        <EmailIcon fontSize='6px' sx={{ color: "yellow", marginLeft: "30px" }} /> &nbsp;
        <Box sx={{ color: "yellow", fontSize: "12px", fontWeight: "400" }}><span style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>E-mail us:</span>&nbsp;help@carecrew.in</Box>

        <InstagramIcon fontSize='6px' sx={{ color: "yellow", marginLeft: "35%" }} />
        <LinkedInIcon fontSize='6px' sx={{ color: "yellow", marginLeft: "10px" }} />
        <FacebookIcon fontSize='6px' sx={{ color: "yellow", marginLeft: "10px" }} />
      </Box>
      <Box padding={3} mt={5.3} sx={{ backgroundColor: "#007a48", display: "flex", alignItems: "center", justifyContent:"center", position: "fixed", width: "100%", gap:"30px" }}>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>How it Works</li>
        <li>Pricing</li>
        <li>Contact Us</li>
        <li>Jobs</li>
        <li>Blogs</li>
      </Box>

      <Box p={1} mt={"3px"} sx={{ position: "fixed", width: "9%", height: "15%", backgroundColor: "yellow", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0 0 10px 10px", marginLeft: "100px" }} >
        <img width={"90%"} src={CCLogo} />
      </Box>
    </Box>

    
  )
}

export default Navbaar