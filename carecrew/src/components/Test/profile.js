import React from 'react'
import Box from "@mui/material/Box";
//import CradComponent from "../CardComponent/CradComponent";
import {CardsData1} from "../../AllData";

import Cardabcd from './Cardabcd';






function Profile() {
  return (
    <>

    <Box sx={{paddingTop:{sm:"10%", xs:"25%"}}}>

    <Box sx={{textAlign:"center", color:"#007a48", fontSize:"28px", fontWeight:"500"}}>Trained and Trustworthy Helps For Your Home</Box>
    <Box mt={2}sx={{textAlign:"center", color:"#007a48", fontSize:"16px", }}>Reliable house helps for housekeeping, cooking and childcare needs at home</Box>
    </Box>
<Box sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2% 12%", justifyContent:"center",marginTop:7}}>
      {CardsData1.map((value) => (
        <Cardabcd
            data ={value}
          link={value.link}
          Cardimage={value.HelpImage}
          CardHeading={value.HelpName}
          SkillSet={value.SkillSet}
          ExpectedSalary={value.ExpectedSalary}
        />
      ))}
      </Box>
    </>
  )
}

export default Profile