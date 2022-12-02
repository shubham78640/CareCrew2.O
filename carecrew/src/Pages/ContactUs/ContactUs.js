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
import { padding } from "@mui/system";

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
      <Navbaar />
      <Box sx={{ backgroundColor: "#F4F8FD", height: "auto" }}>
        <Grid container spacing={0}>
          <Grid paddingBottom="3%" mt={7} item lg={6} xs={12}>
            <Item>
              <Box
                sx={{
                  fontSize: "18px",
                  color: "#72BF44",
                  padding: { sm: "10% 0% 0% 15%", xs: "5% 0% 0% 5%" },
                }}
              >
                Get in touch
              </Box>
              <Box
                sx={{
                  fontSize: "32px",
                  color: "#007a48",
                  lineHeight: "45px",
                  padding: { sm: "0% 15% 0% 15%", xs: "5% 5%" },
                }}
              >
                Drop us a message here or reach out to us over WhatsApp, call or
                email.
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "35px",
                  padding: { sm: "5% 15%", xs: "5% 5%" },
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  href="https://www.google.com/maps/place/1+To+Zee+Daycare/@28.473333,77.089442,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1f7f829f982f:0x114bbd1ad15327ed!8m2!3d28.473333!4d77.091636"
                >
                  <Box
                    padding="10% 2% 10% 5%"
                    sx={{
                      backgroundColor: "white",
                      display: "flex",
                      gap: "4px",
                    }}
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
                </a>

                <Box
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    gap: "20px",
                    cursor: "pointer",
                    padding: { sm: "10% 2% 10% 5%", xs: "10% 2% 10% 5%" },
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
                <a
                  href="https://api.whatsapp.com/send?phone=919643328358"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  <Box
                    padding="10% 2% 10% 5%"
                    sx={{
                      backgroundColor: "white",
                      display: "flex",
                      gap: "25px",
                    }}
                  >
                    <Box>
                      <WhatsAppIcon
                        sx={{ color: "#007a48", fontSize: "50px" }}
                      />
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
                </a>
                <Box
                  padding="10% 2% 10% 5%"
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    gap: "20px",
                    cursor: "pointer",
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
              <Box
                sx={{
                  fontWeight: 900,
                  fontSize: "30px",
                  marginTop: { sm: "18%", xs: "10%" },
                }}
              >
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