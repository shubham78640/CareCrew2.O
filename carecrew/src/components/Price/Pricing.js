import React from "react";
import { Box, Button, styled } from "@mui/material";

const BOX1 = styled(Box)({
  background: "white",
  color: "#007A48",
  boxShadow:
    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  "&:hover": {
    background: "#ebe956",
    //   padding:"4% 5%"
  },
});
function Pricing(props) {
  const { price, pricing_Heading, pricing_Content } = props;
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BOX1
          width="90%"
          p={4}
          sx={{ display: { sm: "flex", xs: "column" }, gap: "5%" }}
        >
          <Box
            sx={{
              fontSize: "70px",
              fontWeight: "500",
              marginLeft: { sm: "0%", xs: "-15%" },
              textAlign: { sm: "", xs: "center" },
            }}
          >
            <span style={{ fontSize: "30px" }}>&#8377; </span> {price}
          </Box>
          <Box mt={2.5}>
            <Box sx={{ fontSize: "18px", fontWeight: "500" }}>
              {pricing_Heading}
            </Box>
            <Box mt={1} sx={{ fontSize: "15px", color: "#72BF44" }}>
              {pricing_Content}
            </Box>
          </Box>
        </BOX1>
      </Box>
    </>
  );
}

export default Pricing;
