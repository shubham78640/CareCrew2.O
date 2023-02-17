import {
  Autocomplete,
  Box,
  Button,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { multiStepContext } from "../../Context/FormContext";
import { useNavigate } from "react-router-dom";
import { MasterApi } from "../../AllData";

function GetACallBackForm({ data }) {
  const [services, setServices] = useState([]);
  const [city, setCity] = useState({});
  const [locality, setLocality] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workinghour, setWorkinghour] = useState("");
  const [longContent, setLongcontent] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [othersLocality, setOthersLocality] = useState("");
  const [society, setSociety] = useState([]);
  const [cityDD, setCityDD] = useState([]);
  const { setCloseForm } = useContext(multiStepContext);
  const navigate = useNavigate();

  let newServices = services.map(function (item) {
    return item["service"];
  });
  let newCity = city ? city["city"] : "";
  let newLocality = locality ? locality["locality"] : "";
  const currentdate = Date.now();


  const handleClick = async () => {
    try {
      let response = await axios.post(`${MasterApi}carecrew/carecrew/save`, {
        address: address,
        createdAt: currentdate,
        email: email,
        message: longContent,
        name: name,
        phoneNumber: phoneNumber,
        service: newServices,
        workingHours: workinghour,
      });

  const config = {
    SecureToken:"64bbee42-d25a-4fff-ad6d-5133e8409c45",
    To : 'rituja@thepinchlife.com',
    From : `intezar@thepinchlife.com`,
    Subject : "New Lead From CARE CREW Website",
    Body : `<p>Name:- ${name}</p> 
            <p>Phone Number:- ${phoneNumber}</p>
            <p>Email:- ${email}</p>         
            <p>Service:- ${newServices}</p>        
            <p>Work Hour:- ${workinghour}</p>        
            <p>Address:- ${address}</p>  
            <p>Message:- ${longContent}</p>`,
      };
      if (window.Email) {
        window.Email.send(config).then(
          () => navigate("/thankyou"),
          setCloseForm(false)
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box sx={{ display: "grid", gap: "10px", position:"relative"}}>
      <TextField
        size="small"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "100%",
          input: {
            fontSize: "12px",
            color: "white",
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
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
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
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",

          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
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
          <TextField
            {...params}
            placeholder="Select Your Services"
            sx={{
              backgroundColor: "#007a48",
              borderRadius: "5px",
              input: {
                fontSize: "12px",
                color: "white",
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
        onChange={(e) => {
          setWorkinghour(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",

          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
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
        placeholder="Others Locality"
        onChange={(e) => {
          setOthersLocality(e.target.value);
        }}
        sx={{
          display: newCity === "Others" ? "block" : "none",
          backgroundColor: "#007a48",
          borderRadius: "5px",
          color: "white",
          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
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
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          color: "white",
          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
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
        onChange={(e) => {
          setLongcontent(e.target.value);
        }}
        minRows={data}
        placeholder="Mention your detailed requirement here"
        style={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          color: "#fff",
          padding: "5px",
          boxSizing: "border-box",
          fontSize: "12px",
        }}
      />
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={handleClick}
          sx={{ fontSize: "14px", textTransform: "none" }}
          variant="contained"
          color="success"
        >
          Submit Your Request
        </Button>
      </div>
    </Box>
  );
}

export default GetACallBackForm;

const servicesData = [
  { service: "HouseKeeping" },
  { service: "Child Care" },
  { service: "Elder Care" },
  { service: "Cooking" },
  { service: "Driving" },
  { service: "Others" },
];

const cityData = [{ city: "Gudgaon" }, { city: "Others" }];

const localityData = [{ locality: "upcomming" }];
