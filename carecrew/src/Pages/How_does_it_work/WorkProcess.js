import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbaar from "../../components/Headers/Navbaar";
import Process from "../../components/Process/Process";
import { display } from "@mui/system";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import { Box, Button, styled } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import Pricing from "../../components/Price/Pricing";

function WorkProcess() {
  return (
    <>
      <Navbaar />
      <Box sx={{}}>
        <Box sx={{ padding: { sm: "12% 8%", xs: "24% 2%" } }}>
          <Box
            sx={{
              fontSize: "42px",
              color: "green",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "3%",
            }}
          >
            How does it work?
          </Box>
          <Process
            Process_Icons={
              <CallIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Enquire"
            Process_Content={
              <Box>
                Submit your inquiry on the website, WhatsApp us on{" "}
                <a
                  href=""
                  style={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#72BF44",
                  }}
                >
                  {" "}
                  96433 28358
                </a>
                , or email us at{" "}
                <span style={{ fontWeight: 600, cursor: "pointer" }}>
                  {" "}
                  help@carecrew.in
                </span>
                , and we will call you back
              </Box>
            }
          />

          <Process
            Process_Icons={
              <SavedSearchIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Interview"
            Process_Content="Do a video call with the candidates we shortlist for you after understanding your requirements thoroughly."
          />
          <Process
            Process_Icons={
              <CleaningServicesIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Trial"
            Process_Content="Take a 3-day on-the-job paid trial of the candidate to assure yourself that you have the right person for your home."
          />
          <Process
            Process_Icons={
              <HandshakeIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Hire"
            Process_Content="Sign the contract digitally & commit yourself to a hassle-free service with continual training of your hired house help."
          />
          <Process
            Process_Icons={
              <SocialDistanceIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Engage"
            Process_Content="Continue to engage with your Relationship Officer for any grievances or replacement needs, even after deployment."
          />
        </Box>
        <Box
          mt={-10}
          mb={6}
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          <Box
            sx={{
              fontSize: "40px",
              fontWeight: "600",
              textAlign: "center",
              color: "green",
            }}
          >
            {" "}
            Pricing
          </Box>
          <Pricing
            price="0"
            pricing_Heading={
              <Box sx={{ marginLeft: { sm: "17%", xs: "0%" } }}>
                pplicable at the time of signing the contract.
              </Box>
            }
            pricing_Content={
              <Box sx={{ marginLeft: { sm: "17%", xs: "0%" } }}>
                {" "}
                img elements must have an alt prop, either with meaningful text,
                or an empty string for decorative images{" "}
              </Box>
            }
          />
          <Pricing
            price="1999"
            pricing_Heading={
              <Box ml={0}>pplicable at the time of signing the contract.</Box>
            }
            pricing_Content=" img elements must have an alt prop, either with meaningful text, or an empty string for decorative images "
          />
          <Pricing
            price="999"
            pricing_Heading={
              <Box sx={{ marginLeft: { sm: "6%", xs: "0%" } }}>
                pplicable at the time of signing the contract.
              </Box>
            }
            pricing_Content={
              <Box sx={{ marginLeft: { sm: "6%", xs: "0%" } }}>
                {" "}
                img elements must have an alt prop, either with meaningful text,
                or an empty string for decorative images{" "}
              </Box>
            }
          />
        </Box>
        <Box
          mt={-4}
          sx={{
            color: "green",
            margin: { sm: "0% 6%", xs: "0% 6%" },
            fontSize: "15px",
          }}
        >
          gst and all elements must have an alt prop, either with meaningful
          text
        </Box>
        <Box>
          <Box
            m="5% 2%"
            sx={{
              fontSize: "40px",
              fontWeight: "600",
              textAlign: "center",
              color: "green",
            }}
          >
            FAQ{" "}
          </Box>
          <Box
            mb={4}
            m="5%"
            sx={{
              display: "flex",
              flexDirection: { sm: "row", xs: "column", gap: "20px" },
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <AccordionComponent
                Accordion_Heading="Do I need to pay any upfront charges?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="When does the service fee have to be paid?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="How many candidates does one get to interview before finalizing one?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="Can one opt for a trial?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="Do you offer replacements if the house help quits the job?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="Do you have people who can work in a 24-hour live-in setting?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="I need four helpers at once for my family. Would I be able to get a discounted rate than the Rs.999 mentioned here?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="What are the modalities of the 10% discount on yearly pricing?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="How does one qualify as an institution to avail of the institutional pricing?"
                Accordion_Content=""
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <AccordionComponent
                Accordion_Heading="Who do I pay the monthly salary of the house help to?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="How many leaves do I need to give to the house help every month?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="Do I need to provide accommodation & meals to the house helps?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="Where is CARE CREW based? Are the services offered pan-India?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="Are the house helps deployed by CARE CREW verified?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="How does one qualify as a large institution to avail of the pricing for large institutions?"
                Accordion_Content=""
              />
              <AccordionComponent
                Accordion_Heading="If I go for yearly pricing, but wish to cease services before the end of 1 year, am I eligible for any refund?"
                Accordion_Content=""
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default WorkProcess;
