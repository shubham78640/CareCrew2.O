import React from "react";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <Grid container spacing={0} sx={{}}>
          <Grid xs={12} lg={3}>
            <Box sx={{ padding: { sm: "7% 8%", xs: "2% 9%" } }}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                We are CARE CREW!
              </Box>
              <Box
                mt={2}
                sx={{ fontSize: "16px", lineHeight: "30px", color: "#BDBDBD" }}
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
                sx={{ fontSize: "16px", color: "#BDBDBD", lineHeight: "22px" }}
              >
                <p>Mon – Fri: 10 am – 6 pm,</p> <p>Sat & Sun: Closed</p>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box sx={{ padding: { sm: "7% 8%", xs: "2% 9%" } }}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                Important Links
              </Box>
              <Box
                mt={2}
                sx={{
                  color: "#72bf44",
                  fontWeight: "900",
                  fontSize: "16px",
                  lineHeight: "32px",
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#72bf44" }}
                >
                  <Box>Home</Box>
                </Link>
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "#72bf44" }}
                >
                  <Box>About Us</Box>
                </Link>
                <Link
                  to="/privacypolicy"
                  style={{ textDecoration: "none", color: "#72bf44" }}
                >
                  <Box>Privacy Policy</Box>
                </Link>
                <Link
                  to="/termsofuse"
                  style={{ textDecoration: "none", color: "#72bf44" }}
                >
                  <Box>Terms of Use</Box>
                </Link>
                <Link
                  to="/agepolicy"
                  style={{ textDecoration: "none", color: "#72bf44" }}
                >
                  <Box>Age Policy</Box>
                </Link>
                <Link
                  to="/contactus"
                  style={{ textDecoration: "none", color: "#72bf44" }}
                >
                  <Box>Contact Us</Box>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box sx={{ padding: { sm: "7% 7%", xs: "2% 9%" } }}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>Contact Us</Box>
              <Box mt={2} sx={{ fontSize: "14px", lineHeight: "37px" }}>
                <a
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  href="https://www.google.com/maps/place/Pinch/@28.473333,77.089442,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1f217d84f5a9:0xdb16d79eda45c82a!8m2!3d28.473333!4d77.091636"
                  target="_blank"
                >
                  <Box sx={{ display: "flex" }}>
                    <Box mt={-0.1} sx={{ color: "#ebe956" }}>
                      <LocationOnIcon sx={{ fontSize: "16px" }} />
                    </Box>
                    &nbsp; &nbsp;
                    <Box>A-55/8, DLF Phase 1, Sector 28 - 122002</Box>
                  </Box>
                </a>
                <a
                  href="tel:+91-80-6201-208"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  target="_blank"
                >
                  <Box sx={{ display: "flex", cursor: "pointer" }}>
                    <Box mt={-0.1} sx={{ color: "#ebe956" }}>
                      <CallIcon sx={{ fontSize: "16px" }} />
                    </Box>
                    &nbsp; &nbsp;
                    <Box> 080-6201-2086</Box>
                  </Box>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919643328358"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  target="_blank"
                >
                  <Box sx={{ display: "flex" }}>
                    <Box mt={-0.1} sx={{ color: "#ebe956" }}>
                      <WhatsAppIcon sx={{ fontSize: "16px" }} />
                    </Box>
                    &nbsp; &nbsp;
                    <Box>964-332-8358</Box>
                  </Box>
                </a>
                <a
                  href="mailto:help@carecrew.in"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  target="_blank"
                >
                  <Box sx={{ display: "flex", cursor: "pointer" }}>
                    <Box mt={-0.1} sx={{ color: "#ebe956" }}>
                      <EmailIcon sx={{ fontSize: "16px" }} />
                    </Box>
                    &nbsp; &nbsp;
                    <Box>help@carecrew.in</Box>
                  </Box>
                </a>
                <Box ml="2%" sx={{ display: "flex", gap: "10px" }}>
                  <Box>
                    <a
                      href="https://www.facebook.com/carecrew.in"
                      target="_blank"
                    >
                      {" "}
                      <FacebookRoundedIcon
                        sx={{ fontSize: "22px", color: "#ebe956" }}
                      />
                    </a>
                  </Box>
                  <Box>
                    <a
                      href="https://www.linkedin.com/showcase/care-crew-in/"
                      target="_blank"
                    >
                      {" "}
                      <LinkedInIcon
                        sx={{ fontSize: "22px", color: "#ebe956" }}
                      />
                    </a>
                  </Box>
                  <Box>
                    <a
                      href="https://www.instagram.com/carecrew.in/"
                      target="_blank"
                    >
                      {" "}
                      <InstagramIcon
                        sx={{ fontSize: "22px", color: "#ebe956" }}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box sx={{ padding: { sm: "7% 26%", xs: "2% 9%" } }}>
              <Box sx={{ fontSize: "24px", fontWeight: "600" }}>Careers</Box>
              <Box mt={2} sx={{ lineHeight: "32px" }}>
                <Link to="/jobs/jobsenglish" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      display: "flex",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    <Box sx={{ fontSize: "14px", color: "#72bf44" }}>
                      Join Us
                    </Box>
                    &nbsp;&nbsp;
                    <Box mt={-0.6} sx={{ fontSize: "10px", color: "#ffffff" }}>
                      English
                    </Box>{" "}
                  </Box>
                </Link>
                <Link to="/jobs/jobshindi" style={{ textDecoration: "none" }}>
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
                    <Box mt={-0.6} sx={{ fontSize: "10px", color: "#ffffff" }}>
                      {" "}
                      हिन्दी
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box padding={4} sx={{ backgroundColor: "#72bf44" }}>
        <Box
          sx={{
            fontSize: "14px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box>2023 © All rights reserved by </Box> &nbsp;
          <a
            href="https://thepinchlife.com/"
            style={{ textDecoration: "none", color: "#000000" }}
            target="_blank"
          >
            <Box sx={{ fontWeight: "900" }}>
              {" "}
              Pinch Lifestyle Services Private Limited
            </Box>
          </a>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
