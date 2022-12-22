import React from "react";
import { Box, Button, styled } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
const BOX2 = styled(Box)({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#72BF44",
  position: "relative",
  left: 35,
  top: 20,
  boxShadow:
    "rgba(0,122,72) 0px 5px, rgba(0,122,72) 0px 10px, rgba(0,122,72) 0px 15px",
  "&:hover": {
  },
});
const BOX1 = styled(Box)({
  background: "white",
  boxShadow:
    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  "&:hover": {
    background: "#ebe956",
  },
});
function Process(props) {
  const { Process_Heading, Process_Content, Process_Icons } = props;
  return (
    <>
      <Box sx={{ display: "flex" }} p="2%">
        <BOX2 sx={{ visibility: { sm: "visible", xs: "hidden" } }}>
          {Process_Icons}{" "}
        </BOX2>
        <BOX1
          width="100%"
          p="3% 5%"
          sx={{ marginLeft: { sm: "0", xs: "-19%" } }}
        >
          <Box sx={{ fontSize: "19px", color: "#007a47", fontWeight: "500" }}>
            {Process_Heading}
          </Box>
          <Box sx={{ color: "#72BF44" }}>{Process_Content}</Box>
        </BOX1>
      </Box>
    </>
  );
}

export default Process;
