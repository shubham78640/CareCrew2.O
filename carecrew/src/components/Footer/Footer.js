import React from "react";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Unstable_Grid2";
function Footer() {
  return (
    <>
      <Box
        padding="3% 6% "
        sx={{
          backgroundColor: "#007a48",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={0.5} sx={{}}>
          <Grid xs={12} lg={3}>
            <Box padding={5}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                We are CARE CREW!
              </Box>
              <Box
                mt={3}
                sx={{ fontSize: "16px", lineHeight: "32px", color: "#BDBDBD" }}
              >
                <Box>
                  We source, train & deploy house helps skilled in any one or
                  more types of household chores.
                </Box>
              </Box>
              <Box mt={2} sx={{ fontSize: "24px", fontWeight: "600" }}>
                Open Hours:
              </Box>
              <Box
                mt={1.5}
                sx={{ fontSize: "16px", color: "#BDBDBD", lineHeight: "32px" }}
              >
                <p>Mon – Fri: 10 am – 6 pm,</p> <p>Sat & Sun: Closed</p>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box padding={5}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                Important Links
              </Box>
              <Box
                mt={3}
                sx={{
                  color: "#72bf44",
                  fontWeight: "900",
                  fontSize: "16px",
                  lineHeight: "32px",
                }}
              >
                <Box>Home</Box>
                <Box>About Us</Box>
                <Box>Privacy Policy</Box>
                <Box>Terms of Use</Box>
                <Box>Age Policy</Box>
                <Box>Contact Us</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box padding={5}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>Contact Us</Box>
              <Box mt={3} sx={{ fontSize: "14px", lineHeight: "42px" }}>
                <Box sx={{ display: "flex" }}>
                  <Box mt={0.3} sx={{ color: "yellow" }}>
                    <LocationOnIcon sx={{ fontSize: "16px" }} />
                  </Box>
                  &nbsp;
                  <Box>A-55/8, DLF Phase 1, Sector 28 - 122002</Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box mt={0.3} sx={{ color: "yellow" }}>
                    <CallIcon sx={{ fontSize: "16px" }} />
                  </Box>
                  &nbsp;
                  <Box>080-6201-2086</Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box mt={0.3} sx={{ color: "yellow" }}>
                    <WhatsAppIcon sx={{ fontSize: "16px" }} />
                  </Box>
                  &nbsp;
                  <Box>964-332-8358</Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box mt={0.3} sx={{ color: "yellow" }}>
                    <EmailIcon sx={{ fontSize: "16px" }} />
                  </Box>
                  &nbsp;
                  <Box>help@carecrew.in</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box padding={5}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>Careers</Box>
              <Box mt={3} sx={{ lineHeight: "32px" }}>
                <Box
                  sx={{
                    display: "flex",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  <Box sx={{ fontSize: "14px", color: "#72bf44" }}>Join Us</Box>
                  &nbsp;&nbsp;
                  <Box mt={-0.6} sx={{ fontSize: "10px" }}>
                    English
                  </Box>{" "}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  <Box sx={{ fontSize: "14px", color: "#72bf44" }}>
                    {" "}
                    हमसे जुड़ें
                  </Box>
                  &nbsp;&nbsp;
                  <Box mt={-0.6} sx={{ fontSize: "10px" }}>
                    {" "}
                    हिन्दी
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box padding={4} sx={{ backgroundColor: "#72bf44" }}>
        <Box
          sx={{ fontSize: "14px", display: "flex", justifyContent: "center" }}
        >
          <Box>2023 © All rights reserved by</Box> &nbsp;
          <Box sx={{ fontWeight: "900" }}>
            {" "}
            Pinch Lifestyle Services Private Limited
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
