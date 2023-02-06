import { Autocomplete, Box, Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { multiStepContext } from "../../Context/FormContext";

function GetACallBackForm({data}) {
  const [services, setServices] = useState([])
  const [city, setCity] = useState({})
  const [locality, setLocality] = useState({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [workinghour, setWorkinghour] = useState("")
  const [longContent, setLongcontent] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [othersLocality, setOthersLocality] = useState("")
  const [society, setSociety] = useState([])
  const [cityDD, setCityDD] = useState([])

  const {  } = useContext(multiStepContext)

  // useEffect(() => {
  //   const getData = async()=>{
  //     let response = await fetch("http://13.126.160.155:8082/carecrew/Society/get/societies/")
  //     let response2 = await fetch("http://13.126.160.155:8082/carecrew/city/get/cities/")
  //     let data = await response.json()
  //     let data2 = await response2.json()
  //     setSociety(data.data)
  //     setCityDD(data2.data)
  //   }
  //   getData()
  // }, [])
  
  // console.log("Society",cityDD)

let newServices = services.map(function(item) { return item['service']; });
 let newCity = city?city["city"]:"";
 let newLocality = locality?locality["locality"]:"";
const date =Date.now()




  const handleClick = async ()=>{
  //   console.log({ services, city, locality, name, email, workinghour, longContent, address, phoneNumber})
  //   try {
  //     let response = await axios.post(
  //       "http://13.126.160.155:8082/carecrew/carecrew/save", {
  //         "address": address,
  //         "city": newCity,
  //         "createdAt": date,
  //         "email": email,
  //         "locality": newLocality,
  //         "message": longContent,
  //         "name": name,
  //         "phoneNumber": phoneNumber,
  //         "workingHours": workinghour,
  //         "service":newServices
  //       }
  //     );
  //     alert("worker save successfully")
  //     console.log(response)
       
      
  // } catch (error) {
  //     alert(error)
  // }

  const config = {
    SecureToken:"64bbee42-d25a-4fff-ad6d-5133e8409c45",
    To : 'intezar@thepinchlife.com',
    From : "intezar@thepinchlife.com",
    Subject : email,
    Body : `<p>Name:- ${name}</p> 
            <p>Phone Number:- ${phoneNumber}</p>        
            <p>Service:- ${newServices}</p>        
            <p>Work Hour:- ${workinghour}</p>        
            <p>Address:- ${address}</p>  
            <p>Message:- ${longContent}</p>`
  }
  if(window.Email){
    window.Email.send(config).then (()=>alert("email sent successfully"))



  
  }
  }

  return (
    <Box sx={{ display: "grid", gap: "10px" }}>
      <TextField
        size="small"
        placeholder="Name"
        onChange={(e)=>{setName(e.target.value)}}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          input: {
            fontSize:"12px",
            color:"white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextField
        size="small"
        placeholder="Mobile Number"
        onChange={(e)=>{setPhoneNumber(e.target.value)}}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          input: {
            fontSize:"12px",
            color:"white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextField
        size="small"
        placeholder="Email"
        onChange={(e)=>{setEmail(e.target.value)}}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",

          width: "300px",
          input: {
            fontSize:"12px",
            color:"white",
            "::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
   <Autocomplete
          multiple
          disableCloseOnSelect
          size="small"
          color="primary"
          sx={{ width: "300px" }}
          options={servicesData}
          getOptionLabel={(option) => option.service}
          onChange={(event, newValue) => {
            setServices([...newValue]);
          }}
          renderInput={(params) => (
            <TextField {...params}
              placeholder="Select Your Services"
              sx={{
                backgroundColor:"#007a48",
                borderRadius: "5px",
                input: {
                    fontSize:"12px",
                    color:"white",
                  "&::placeholder": {
                    textOverflow: "ellipsis !important",
                    fontWeight: "400",
                    opacity: 0.9,
                    color: "#ebe956",
                    fontSize: "12px",
                  },
                },

            }}
            />
          )}
        />
      
      <TextField
        size="small"
        placeholder="Working hours*"
        onChange={(e)=>{setWorkinghour(e.target.value)}}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",

          width: "300px",
          input: {
            fontSize:"12px",
            color:"white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
   {/* <Autocomplete
          size="small"
          color="primary"
          sx={{ width: "300px" }}
          options={cityDD}
          getOptionLabel={(option) => option.cityName}
          onChange={(event, newValue) => {
            setCity(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params}
              placeholder="City"
              sx={{
                backgroundColor:"#007a48",
                borderRadius: "5px",
                input: {
                    fontSize:"12px",
                    color:"white",
                  "&::placeholder": {
                    textOverflow: "ellipsis !important",
                    fontWeight: "400",
                    opacity: 0.9,
                    color: "#ebe956",
                    fontSize: "12px",
                  },
                },

            }}
            />
          )}
        /> */}

    {/* <Autocomplete
          size="small"
          color="primary"
          sx={{ width: "300px", display:newCity==="Others"?"none":"block"}}
          options={society}
          getOptionLabel={(option) => option.society}
          onChange={(event, newValue) => {
            setLocality(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params}
              placeholder="Locality"
              sx={{
                backgroundColor:"#007a48",
                borderRadius: "5px",
                input: {
                    fontSize:"12px",
                    color:"white",
                  "&::placeholder": {
                    textOverflow: "ellipsis !important",
                    fontWeight: "400",
                    opacity: 0.9,
                    color: "#ebe956",
                    fontSize: "12px",
                  },
                },

            }}
            />
          )}
        /> */}

   <TextField
        size="small"
        placeholder="Others Locality"
        onChange={(e)=>{setOthersLocality(e.target.value)}}
        sx={{
          display:newCity==="Others"?"block":"none",
          backgroundColor: "#007a48",
          borderRadius: "5px",
          color:"white",
          width: "300px",
          input: {
            fontSize:"12px",
            color:"white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />

      <TextField
        size="small"
        placeholder="Address"
        onChange={(e)=>{setAddress(e.target.value)}}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          color:"white",
          width: "300px",
          input: {
            fontSize:"12px",
            color:"white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextareaAutosize
        aria-label="minimum height"
        onChange={(e)=>{setLongcontent(e.target.value)}}
        minRows={data}
        placeholder="Mention your detailed requirement here"
        style={{
            backgroundColor: "#007a48",
            borderRadius: "5px",
            width: "300px",
            color:"#fff",
            padding:"5px",
            boxSizing:"border-box",
            fontSize:"12px"
        }}
      />
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Button onClick={handleClick} sx={{ fontSize: "14px", textTransform:"none" }} variant="contained" color="success">
          Submit Your Request
        </Button>
      </div>
    </Box>
  );
}

export default GetACallBackForm;


const servicesData = [
    {service:"HouseKeeping"},
    {service:"Child Care"},
    {service:"Elder Care"},
    {service:"Cooking"},
    {service:"Driving"},
    {service:"Others"}
]

const cityData = [
  {city:"Gudgaon"},
  {city:"Others"}
]

const localityData = [
  {locality:"upcomming"}
]
