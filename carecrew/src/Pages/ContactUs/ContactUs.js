import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Navbaar from "../../components/Headers/Navbaar";
import Footer from "../../components/Footer/Footer";

const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "10px",
  justifyContent: "center",
  gap: "20px",
  flexDirection: "column",
}));

function ContactUs() {
  return (
    <>
    <Navbaar/>
      <Box  sx={{ backgroundColor: "#F4F8FD",height:"auto" }}>
        <Grid container spacing={0}>
          <Grid paddingBottom="3%" mt={7} item lg={6} xs={12}>
            <Item>
              <Box
                padding="10% 0% 0% 20%"
                sx={{ fontSize: "18px", color: "#72BF44" }}
              >
                Get in touch
              </Box>
              <Box
                padding="0% 15% 0% 20%"
                sx={{ fontSize: "32px", color: "#007a48", lineHeight: "45px" }}
              >
                Drop us a message here or reach out to us over WhatsApp, call or
                email.
              </Box>
              <Box
                padding="5% 15%"
                sx={{ display: "flex", flexDirection: "column", gap: "35px" }}
              >
                <Box
                  padding="10% 2% 10% 5%"
                  sx={{ backgroundColor: "white", display: "flex", gap: "4px" }}
                >
                  <Box>
                    <LocationOnOutlinedIcon
                      sx={{ color: "#007a48", fontSize: "50px" }}
                    />
                  </Box>
                  <Box sx={{ lineHeight: "30px" }}>
                    <Box sx={{ color: "#007a48", fontWeight: "900" }}>
                      Office address
                    </Box>
                    <Box sx={{ fontSize: "16px", color: "#72BF44" }}>
                      A-55/8, DLF Phase 1, Sector 28 - 122002
                    </Box>
                  </Box>
                </Box>

                <Box
                  padding="10% 2% 10% 5%"
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <PhoneOutlinedIcon
                      sx={{ color: "#007a48", fontSize: "50px" }}
                    />
                  </Box>
                  <Box sx={{ lineHeight: "30px" }}>
                    <Box sx={{ color: "#007a48", fontWeight: "900" }}>
                      Phone number
                    </Box>
                    <Box sx={{ fontSize: "16px", color: "#72BF44" }}>
                      080-6201-2086
                    </Box>
                  </Box>
                </Box>

                <Box
                  padding="10% 2% 10% 5%"
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    gap: "25px",
                  }}
                >
                  <Box>
                    <WhatsAppIcon sx={{ color: "#007a48", fontSize: "50px" }} />
                  </Box>
                  <Box sx={{ lineHeight: "30px" }}>
                    <Box sx={{ color: "#007a48", fontWeight: "900" }}>
                      WhatsApp number
                    </Box>
                    <Box sx={{ fontSize: "16px", color: "#72BF44" }}>
                      964-332-8358
                    </Box>
                  </Box>
                </Box>
                <Box
                  padding="10% 2% 10% 5%"
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <EmailOutlinedIcon
                      sx={{ color: "#007a48", fontSize: "50px" }}
                    />
                  </Box>
                  <Box sx={{ lineHeight: "30px" }}>
                    <Box sx={{ color: "#007a48", fontWeight: "900" }}>
                      Email address
                    </Box>
                    <Box sx={{ fontSize: "16px", color: "#72BF44" }}>
                      help@carecrew.in
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </Item>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Item sx={{ color: "#007a48" }}>
              <Box mt={20} sx={{ fontWeight: 900, fontSize: "30px" }}>
                Get a call back
              </Box>
              <Box sx={{ display: "flex", gap: "0px" }}>
                <Grid mt={2} container spacing={1}>
                  <Grid item lg={6} xs={12}>
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>Name*</Box>
                      <TextField
                        id="outlined-basic"
                        label="Your Name*"
                        variant="outlined"
                        color="success"
                        sx={{
                          backgroundColor: "white",
                          width: "96%",
                          marginTop: "12px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>Email</Box>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        color="success"
                        sx={{
                          backgroundColor: "white",
                          width: "96%",
                          marginTop: "12px",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ display: "flex", gap: "30px" }}>
                <Grid mt={2} container spacing={1}>
                  <Grid item lg={6} xs={12}>
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>Phone*</Box>
                      <TextField
                        id="outlined-basic"
                        label="Phone*"
                        variant="outlined"
                        color="success"
                        sx={{
                          backgroundColor: "white",
                          width: "96%",
                          marginTop: "12px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>City*</Box>
                      <TextField
                        id="outlined-basic"
                        label="City*"
                        variant="outlined"
                        color="success"
                        sx={{
                          backgroundColor: "white",
                          width: "96%",
                          marginTop: "12px",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid item lg={12} xs={12} mt={2}>
                <Box>
                  <Box sx={{ fontWeight: 500 }}>Your message*</Box>
                  <TextField
                    id="outlined-textarea"
                    label="Mention your detailed requirment here...*"
                    placeholder="Mention your detailed requirment here...*"
                    multiline
                    color="success"
                    rows={7}
                    sx={{
                      backgroundColor: "white",
                      marginTop: "12px",
                      width: "96%",
                    }}
                  />
                </Box>
              </Grid>
              <Box sx={{ display: "flex", gap: "30px" }}>
                <Grid container mt={2}>
                  <Grid item lg={6} xs={12}>
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>Working hours*</Box>
                      <TextField
                        id="outlined-basic"
                        label="Working hours*"
                        variant="outlined"
                        color="success"
                        sx={{
                          backgroundColor: "white",
                          width: "96%",
                          marginTop: "12px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Box>
                      <Box sx={{ fontWeight: 500 }}>Address*</Box>
                      <TextField
                        id="outlined-basic"
                        label="Address*"
                        variant="outlined"
                        color="success"
                        sx={{
                          backgroundColor: "white",
                          width: "95%",
                          marginTop: "12px",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid mt={2} item lg={6} xs={12}>
                <Button variant="contained" color="success">
                  Submit Your request
                </Button>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default ContactUs;
