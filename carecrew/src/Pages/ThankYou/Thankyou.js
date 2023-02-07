import { Box, Button } from '@mui/material'
import React from 'react'
import thankyou from "../../Images/thankyou.webp"
import { useNavigate } from 'react-router-dom'

function Thankyou() {
    let nevigate = useNavigate()
  return (
    <>
    <Box border={1} sx={{width:{sm:"50%", xs:"100%"}, height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", margin:"auto"}}>
    <img width="100%" src={thankyou} alt="" />
    </Box>
    <Button onClick={()=>{nevigate("/")}} color="success" sx={{position:"relative", left:{sm:"45%", xs:"32%"}, bottom:{sm:"270px", xs:"380px"}}} variant='contained' >Go to homepage</Button>
    </>
  )
}

export default Thankyou