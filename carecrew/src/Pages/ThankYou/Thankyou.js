import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function Thankyou() {
  let nevigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      nevigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { sm: "0px", xs: "20px" },
        }}
      >
        <Card
          sx={{
            padding: { sm: "8%", xs: "10%" },
            marginTop: { sm: "10%", xs: "30%" },
           
          }}
        >
          <CardContent sx={{ justifyContent: "center",textAlign:"center"}}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                color: "#007a47",
                fontSize: { sm: "40px", xs: "17px" },
                fontWeight: { sm: "500", xs: "600" },
              }}
            >
              Thank you for filling out the form
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#007a47",
                fontSize: { sm: "20px", xs: "14px" },
                // fontWeight: { sm: "500", xs: "600" },
              }}
            >
              Your request has been received by us and will be processed promptly. Our team will review your request and reach out to you shortly.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default Thankyou;
