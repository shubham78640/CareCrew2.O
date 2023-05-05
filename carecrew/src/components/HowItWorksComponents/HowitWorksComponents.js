import React, { useContext } from "react";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";

const BOX = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  textAlign: "justify",
  alignItems: "center",
  flexBasis: "260px",
});

const BOX2 = styled(Box)({
  background: "white",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "rgba(0,122,72) 0px 5px, rgba(0,122,72) 0px 10px, rgba(0,122,72) 0px 15px",
  "&:hover": {
    background: "#73bf45",
  },
});

const H3 = styled("h6")({
  color: "#73bf45",
});

function HowitWorksComponents() {
  return (
    <>
      <Box
        mt={5}
        sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}
      >
        <BOX>
          <BOX2>
            <CallIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Enquire</H3>
        </BOX>

        <BOX>
          <BOX2>
            <SavedSearchIcon
              sx={{ color: "rgba(0,122,72)", fontSize: "28px" }}
            />
          </BOX2>
          <H3>Interview & Trial</H3>
        </BOX>

        <BOX>
          <BOX2>
            <CleaningServicesIcon
              sx={{ color: "rgba(0,122,72)", fontSize: "28px" }}
            />
          </BOX2>
          <H3>Hire & Train</H3>
        </BOX>

        <BOX>
          <BOX2>
            <HandshakeIcon sx={{ color: "rgba(0,122,72)", fontSize: "28px" }} />
          </BOX2>
          <H3>Replacement</H3>
        </BOX>

        <BOX>
          <BOX2>
            <SocialDistanceIcon
              sx={{ color: "rgba(0,122,72)", fontSize: "28px" }}
            />
          </BOX2>
          <H3>Engage</H3>
        </BOX>
      </Box>
    </>
  );
}

export default HowitWorksComponents;
