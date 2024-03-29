import React from "react";
import Box from "@mui/material/Box";
import CradComponent from "../CardComponent/CradComponent";
import {CardsData} from "../../AllData";
function ServicesCards() {
  return (
    <>

    <Box sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2%", justifyContent:"center",marginTop:7}}>
      {CardsData.map((value) => (
        <CradComponent
          link={value.link}
          Cardimage={value.Cardimage}
          CardHeading={value.CardHeading}
          CardContentLines={value.CardContentLines}
        />
      ))}
      </Box>
      
    </>
  );
}
export default ServicesCards;
