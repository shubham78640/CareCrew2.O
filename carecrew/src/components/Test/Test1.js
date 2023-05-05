import React, { useContext } from "react";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";


import CallIcon from "@mui/icons-material/Call";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';









const BOX = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  textAlign: "justify",
  alignItems: "center",
  flexBasis: "260px",

});

const BOX2 = styled(Box)({
  background: "white",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "rgba(0,122,72) 0px 5px, rgba(0,122,72) 0px 10px, rgba(0,122,72) 0px 15px",
  "&:hover": {
    background: "#73bf45",
  },
});

const P = styled("p")({
  padding: "10px",
  boxSizing: "border-box",
  color: "#3a4268",
  lineHeight: "-20px",
  marginTop: "-20px",
});

const H3 = styled("h6")({
  color: "#73bf45",
});

const StyleDiv = styled("div")({
  width: "60px",
  height: "2px",
  background: "#73bf45",
  marginTop: "-20px",
});
function Test1() {


  return (

    <>


<Box mt={5} sx={{display:"flex", flexDirection:{sm:"row",xs:"column"}}} >

<BOX>
          <BOX2>
            <CallIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Enquire</H3>
          {/* <StyleDiv /> */}
          {/* <P>
            Submit your inquiry on the website, WhatsApp us on 96433 28358, or
            drop us a mail at help@carecrew.in, & get a call back from us.
          </P> */}
        </BOX>

        <BOX>
          <BOX2>
            <SavedSearchIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Interview & Trial</H3>
          {/* <StyleDiv /> */}
          {/* <P>
          Take an interview and a 3-day on-the-job paid trial of the candidate to assure yourself that you have the right person for your home.

          </P> */}
        </BOX>

        <BOX>
          <BOX2>
            <CleaningServicesIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Hire & Train</H3>
          {/* <StyleDiv /> */}
          {/* <P>
          Sign the contract digitally & commit yourself to a hassle-free service. Get your Associate trained by our trainers post deployment 


          </P> */}
        </BOX>

        <BOX>
          <BOX2>
            <HandshakeIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Replacement</H3>
          {/* <StyleDiv /> */}
          {/* <P>
          Get unlimited replacements for up to a period 6 months from the first deployment
          </P> */}
        </BOX>

        <BOX>
          <BOX2>
            <SocialDistanceIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Engage</H3>
          {/* <StyleDiv />
          <P>
          Engage with our Relationship Officer for any grievances / training / replacement requests

          </P> */}
        </BOX>
      

</Box>



    </>


  


)


}

export default Test1