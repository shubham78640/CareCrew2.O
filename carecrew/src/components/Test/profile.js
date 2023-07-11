import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
//import CradComponent from "../CardComponent/CradComponent";
import {CardsData1} from "../../AllData";

import Cardabcd from './Cardabcd';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';






function Profile() {

  const [mealList, setMealList] = useState([]);
  const mealData =  collection(db, "CandidateList")

    useEffect(() => {
    const GetFilteredMeal = async () => {
      try {
        const data = await getDocs(mealData);
        const filterData = data.docs.map((doc)=>({
          ...doc.data()
        }))
        setMealList(filterData)
        
      } catch (error) {
        console.log(error)
      }
 
    };
    GetFilteredMeal();
  }, [])

  console.log(mealList)

  return (
    <>

    <Box sx={{paddingTop:{sm:"10%", xs:"25%"}}}>

    <Box sx={{textAlign:"center", color:"#007a48", fontSize:"28px", fontWeight:"500"}}>Trained and trustworthy helps for your home</Box>
    <Box mt={2}sx={{textAlign:"center", color:"#007a48", fontSize:"16px", }}>Reliable house associates for housekeeping, cooking and childcare needs at home</Box>
    </Box>
<Box sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2% 12%", justifyContent:"center",marginTop:7}}>
      {mealList?.map((value, key) => (
        <Cardabcd
           key={key}
            data ={value}
          link={value.link}
          // Cardimage={value.HelpImage}
          Cardimage={"https://www.chaudharyhousemaidservices.com/images/service/housemaid-services.jpg"}
          CardHeading={value.name}
          SkillSet={value.skills}
          ExpectedSalary={value.worktime}
        />

      //   {
      //     "gender": "Female",
      //     "skills": "Cooking",
      //     "experience": "6 years",
      //     "worktime": "",
      //     "age": "",
      //     "language": "",
      //     "image": "",
      //     "location": "Chakkarpur, Gurugram",
      //     "trainingDetails": "Home Cook available on demand, whenever you need"
      // }
      ))}
      </Box>
    </>
  )
}

export default Profile