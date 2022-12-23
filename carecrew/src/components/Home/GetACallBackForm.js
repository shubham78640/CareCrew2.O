import { Autocomplete, Box, Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

function GetACallBackForm() {
  return (
    <Box sx={{ display: "grid", gap: "15px" }}>
      <TextField
        size="small"
        placeholder="Name"
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
        //   onChange={(event, newValue) => {
        //     setTertiarySkill([...newValue]);
        //   }}
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
        placeholder="City"
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
        placeholder="Address"
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
        minRows={2}
        placeholder="Mentioned your detailed requirement here"
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
        <Button sx={{ fontSize: "14px", textTransform:"none" }} variant="contained" color="success">
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
