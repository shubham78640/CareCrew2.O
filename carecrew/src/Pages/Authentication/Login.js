import { Box } from '@mui/system';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

const dummyPassword = "1234";
let user = localStorage.getItem('user')


function Login() {
    const [password, setPassword] = useState("")
    
    const handleClick = ()=>{
    if(password.length===4 && password===dummyPassword){
        localStorage.setItem('user', true);
        window.location.reload(true)
    }
}
    
  return (
    <Box sx={{width:"100%", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
       <Box sx={{width:"400px", height:"300px", display:"grid", gap:"10px" ,justifyContent:"center", backgroundColor:"White",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
        <TextField
          sx={{mt:8}}
          size="small"
          label="Password"
          autoComplete='off'
          type="password"
          onChange = {(e)=>{setPassword(e.target.value)}}
          />
          <div style={{textAlign:"center"}}><Button onClick={handleClick} variant='contained'>Submit</Button></div>
       </Box> 
       {user && <Navigate to="/admin" />}
    </Box>
  )
}

export default Login