import React from "react";
import Box from "@mui/material/Box";
import CradComponent from "../CardComponent/CradComponent";
import {CardsData} from "../../AllData";
function ServicesCards() {
  return (
    <>
    <Box mt={3} sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2%", justifyContent:"center",}}>
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
