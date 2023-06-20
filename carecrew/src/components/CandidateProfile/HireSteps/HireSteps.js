import { Box, Button, styled } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import React, { useContext } from "react";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { multiStepContext } from "../../../Context/FormContext";
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

const P = styled("p")({
  padding: "10px",
  boxSizing: "border-box",
  color: "#3a4268",
  lineHeight: "-20px",
  marginTop: "-20px",
});

const H3 = styled("h3")({
  color: "#73bf45",
});

const StyleDiv = styled("div")({
  width: "60px",
  height: "2px",
  background: "#73bf45",
  marginTop: "-20px",
});

function HireSteps() {
  const handleSubmitform = () => {
    setCloseForm1(true);
    setCloseForm(true);
  };

  const { closeForm, setCloseForm, closeForm1, setCloseForm1 } =
    useContext(multiStepContext);
  return (
    <>
      <Box mt={10} sx={{ background: "#ededed" }}>
        <Box p={4} pt={10}>
          <h6 style={{ color: "#73bf45" }}>Steps to hire</h6>
          <h1 style={{ color: "rgba(0,122,72)" }}>How does it work?</h1>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={8}
          sx={{ flexWrap: { sm: "nowrap", xs: "wrap" } }}
          rowGap={7}
        >
          <BOX>
            <BOX2>
              <SavedSearchIcon
                sx={{ color: "rgba(0,122,72)", fontSize: "38px" }}
              />
            </BOX2>
            <H3>Select a Profile</H3>
            <StyleDiv />
            <P>
              Choose any of the five profiles of our trained house helps that
              best match your current household requirements.
            </P>
          </BOX>

          <BOX>
            <BOX2>
              <BookmarkAddedIcon
                sx={{ color: "rgba(0,122,72)", fontSize: "38px" }}
              />
            </BOX2>
            <H3>Book a Free Trial</H3>
            <StyleDiv />
            <P>
              Reserve a trial day with your preferred house help to experience
              and assess their services firsthand.
            </P>
          </BOX>

          <BOX>
            <BOX2>
              <CleaningServicesIcon
                sx={{ color: "rgba(0,122,72)", fontSize: "38px" }}
              />
            </BOX2>
            <H3>Evaluate & Hire</H3>
            <StyleDiv />
            <P>
              After checking the performance and compatibility, hire the house
              help either for a full-time shift (12 hours) or a live-in (24
              hours) role to suit your needs.
            </P>
          </BOX>
          <BOX>
            <BOX2>
              <SocialDistanceIcon
                sx={{ color: "rgba(0,122,72)", fontSize: "38px" }}
              />
            </BOX2>
            <H3>Engage</H3>
            <StyleDiv />
            <P>
              Connect with our relationship officer for any grievances, concerns
              or requests.
            </P>
          </BOX>
        </Box>
        <Box mt={5} pb={5} display={"flex"} justifyContent={"center"}>
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            color="success"
            // onClick={handleSubmitform}
            onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
          >
          Find a Help
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HireSteps;
