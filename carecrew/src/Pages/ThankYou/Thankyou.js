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
          <CardContent sx={{}}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                color: "#007a47",
                fontSize: { sm: "40px", xs: "17px" },
                fontWeight: { sm: "500", xs: "600" },
              }}
            >
              ꧁꧅ ᴛʜᴀɴᴋ ʏᴏᴜ ꧅꧂
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default Thankyou;
