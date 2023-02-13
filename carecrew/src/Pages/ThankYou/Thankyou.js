import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Thankyou() {
  let nevigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      nevigate("/");
    }, 3000);
  }, []);
  return (
    <>
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <img
          width="100%"
          src="https://astrixinc.com/wp-content/uploads/2017/05/thank-you.png"
          alt=""
        />
      </Box>
      <Button
        onClick={() => {
          nevigate("/");
        }}
        color="success"
        sx={{
          position: "relative",
          left: { sm: "45%", xs: "32%" },
          bottom: { sm: "200px", xs: "200px" },
        }}
        variant="contained"
      >
        Go to homepage
      </Button>
    </>
  );
}
export default Thankyou;
