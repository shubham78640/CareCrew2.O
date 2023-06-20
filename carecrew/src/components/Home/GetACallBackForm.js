import {
  Alert,
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
import moment from "moment";
import "../Headers/navbaar.css";

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
  const [yourRequirement,setYourRequirement]= useState("");
  const [society, setSociety] = useState([]);
  const [cityDD, setCityDD] = useState([]);
  const { setCloseForm } = useContext(multiStepContext);
  const [throtlingHandler, setThrotlingHandler] = useState(0);
  const [buttonText, setButtonText] = useState("Submit Your Request");
  const navigate = useNavigate();

  let newServices = services.map(function (item) {
    return item["service"];
  });

  let newCity = city ? city["city"] : "";
  let newLocality = locality ? locality["locality"] : "";
  const currentdate = Date.now();
  const Newdatetime = moment(currentdate).format("MMMM Do YYYY, h:mm:ss a");

  const onError = (err) => {
    alert(err.message);
  };
  const onSuccess = (success) => {
    setButtonText(success);
  };

  const handleClick = async (onSuccess, onError) => {
    const postData = {
      address: address,
      createdAt: Newdatetime,
      email: email,
      message: longContent,
      name: name,
      phoneNumber: phoneNumber,
      service: newServices,
      workingHours: workinghour,
      yourRequirement:yourRequirement
    };
    setAddress("");
    setEmail("");
    setName("");
    setWorkinghour("");
    setServices([]);
    setPhoneNumber("");
    setLongcontent("");
    setYourRequirement("");
    setButtonText("Submitiing...");

    try {
      let response = axios.post(`${MasterApi}`, postData);
      navigate("/thankyou")
      onSuccess("Submit Your Request");
      setCloseForm(false);
      console.log(response);
      // const config = {
      //   SecureToken: "64bbee42-d25a-4fff-ad6d-5133e8409c45",
      //   To: "rituja@thepinchlife.com",
      //   From: `intezar@thepinchlife.com`,
      //   Subject: "New Lead From CARE CREW Website",
      //   Body: `<p>Name:- ${postData.name}</p> 
      //       <p>Phone Number:- ${postData.phoneNumber}</p>
      //       <p>Email:- ${postData.email}</p>         
      //       <p>Service:- ${postData.service}</p>        
      //       <p>Work Hour:- ${postData.workingHours}</p>        
      //       <p>Address:- ${postData.address}</p>  
      //       <p>Your Requirement:- ${postData.yourRequirement}</p> 
      //       <p>Message:- ${postData.message}</p>`,
      // };

      // if (window.Email) {
      //   onSuccess("Submit Your Request");
      //   window.Email.send(config).then(
      //     () => navigate("/thankyou"),
      //     setCloseForm(false)
      //   );
      // }
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Box sx={{ display: "grid", gap: "10px", position: "relative" }}>
      <TextField
        size="small"
        placeholder="Name*"
        value={name}
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
        placeholder="Mobile Number*"
        value={phoneNumber}
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
        placeholder="Email*"
        value={email}
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
disablePortal
id="combo-box-demo"
        size="small"
        color="primary"
        sx={{ width: "300px" }}
        options={yourRequirementsDD}
        getOptionLabel={(option) => option}
        value={yourRequirement}
        onChange={(event, newValue) => {
          setYourRequirement(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Your Requirements*"
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

      <Autocomplete
        multiple
        disableCloseOnSelect
        size="small"
        color="primary"
        sx={{ width: "300px" }}
        className="custom-autocomplete"
        options={servicesData}
        getOptionLabel={(option) => option.service}
        value={services}
        onChange={(event, newValue) => {
          setServices([...newValue]);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select Your Services*"
            sx={{
              backgroundColor: "#007a48",
              borderRadius: "5px",
              input: {
                fontSize: "12px",
                color: "#ebe956",
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
        placeholder="Required Duration of Services*"
        value={workinghour}
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
        placeholder="Address*"
        value={address}
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
        value={longContent}
        onChange={(e) => {
          setLongcontent(e.target.value);
        }}
        minRows={data}
        placeholder="Detailed Scope of Work*"
        style={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          color: "#fff",
          padding: "9px",
          height: "80px",
          boxSizing: "border-box",
          fontSize: "12px",
        }}
      />
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={() => {
            handleClick(onSuccess, onError);
          }}
          disabled={
            name && email && phoneNumber && address && workinghour&&yourRequirement&&longContent&&services.length
              ? false
              : true
          }
          sx={{ fontSize: "14px", textTransform: "none" }}
          variant="contained"
          color="success"
        >
          {buttonText}
        </Button>
      </div>
    </Box>
  );
}

export default GetACallBackForm;

const servicesData = [
  { service: "Housekeeping" },
  { service: "Child Care" },
  { service: "Elder Care" },
  { service: "Cooking" },
  { service: "Driving" },
  { service: "Others" },
];

const cityData = [{ city: "Gudgaon" }, { city: "Others" }];

const localityData = [{ locality: "upcomming" }];

const yourRequirementsDD = ["Regular Help for Daily Service", "On-demand Help for One-time Service"];
