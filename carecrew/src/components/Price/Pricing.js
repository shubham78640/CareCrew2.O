import React from "react";
import { Box, Button, styled } from "@mui/material";

const BOX1 = styled(Box)({
  background: "white",
  color: "#007A48",
  width:"385px",
  height:"270px",
  borderRadius:"10px",
  boxShadow:
    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  "&:hover": {
    background: "#ebe956",
    width:"385px",
 
    //  padding:"4% 5%"
  },
});
function Pricing(props) {
  const { price, pricing_Heading, pricing_Content } = props;
  return (
    <>
  
      <Box sx={{ display: "flex", justifyContent:"center",  fontFamily: "Helvetica" }}>
        <BOX1
          sx={{ display: { sm: "flex", xs: "flex" },flexDirection:"column", gap: "0%", padding:"19% 6%" }}
        >
          <Box >
            <Box sx={{ fontSize: "30px", fontWeight: "700",   textAlign: { sm: "center", xs: "center" }, }}>
              {pricing_Heading}
            </Box>
            <Box
              mt={1}
              sx={{
                fontSize: "15px",
                color: "#72BF44",
                textAlign: { sm: "center", xs: "center" },
              }}
            >
              {pricing_Content}
            </Box>
          </Box>
        </BOX1>
      </Box>
    </>
  );
}

export default Pricing;
