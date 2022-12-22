import React, { useState } from "react";
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
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import Servies from "../../components/Services/Servies";
import ImageCooking from "../../Images/HK2.jpg";
import DividerComponent from "../../components/DividerComponent/DividerComponent";

const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "10px",
  justifyContent: "center",
  gap: "20px",
  flexDirection: "column",
}));

function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [workinghr, setworkingHr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Details=",
      name,
      phone,
      email,
      city,
      message,
      address,
      workinghr
    );

    const data = {
      Name: name,
      Phone: phone,
      Email: email,
      City: city,
      Message: message,
      Address: address,
      Working_HR: workinghr,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/562c7b35-218c-441b-84ae-f9258f9f0ca7",
        data
      )
      .then((response) => {
        console.log(response);
        setAddress("");
        setCity("");
        setEmail("");
        setName("");
        setPhone("");
        setworkingHr("");
        setMessage("");
      });
  };

  return (
    <>
      <ScrollToTop smooth color="green" />
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
                  target="_blank"
                  href="https://www.google.com/maps/place/Pinch/@28.473333,77.089442,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1f217d84f5a9:0xdb16d79eda45c82a!8m2!3d28.473333!4d77.091636"
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
                  target="_blank"
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
                p={2}
                sx={{
                  fontWeight: 900,
                  fontSize: "30px",
                  marginTop: { sm: "18%", xs: "10%" },
                }}
              >
                Get a call back
              </Box>
              {/* <form > */}
              <Box p="0% 4%" sx={{ display: "flex", gap: "0px" }}>
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
                          width: { sm: "96%", xs: "96%" },
                          marginTop: "12px",
                        }}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                          marginTop: "12px",
                          width: { sm: "96%", xs: "96%" },
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box p="0% 4%" sx={{ display: "flex", gap: "30px" }}>
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
                          marginTop: "12px",
                          width: { sm: "96%", xs: "96%" },
                        }}
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
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
                          marginTop: "12px",
                          width: { sm: "96%", xs: "96%" },
                        }}
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid item lg={12} xs={12} mt={2}>
                <Box p="0% 4%">
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
                      width: { sm: "98%", xs: "96%" },
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </Box>
              </Grid>
              <Box p="0% 4%" sx={{ display: "flex", gap: "30px" }}>
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
                          width: { sm: "96%", xs: "96%" },
                          marginTop: "12px",
                        }}
                        onChange={(e) => setworkingHr(e.target.value)}
                        value={workinghr}
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
                          width: { sm: "96%", xs: "96%" },
                          marginTop: "12px",
                        }}
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid p="0% 4%" mt={2} mb={4} item lg={6} xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Submit Your request
                </Button>
              </Grid>
              {/* </form> */}
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box p={5} mb={-7} sx={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2063055398394!2d77.091636!3d28.473332999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f217d84f5a9%3A0xdb16d79eda45c82a!2sPinch!5e0!3m2!1sen!2sin!4v1669972130601!5m2!1sen!2sin"
          width="90%"
          height="450"
          style={{ border: 0 , marginBottom:"70px"}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      <Footer />
      {/* ================================Services Section For Teasting====================================== */}
      {/* <Box sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}>
        <Box sx={{ width: { sm: "30%", xs: "100%",  } , marginLeft:{sm: "0%", xs: "0%"}, justifyContent:"flex-end"}} ><DividerComponent  sx={{marginLeft:"20%"}} /></Box>
        <Box sx={{ width: { sm: "62%", xs: "100%" } }}>
          <Servies
            Service_Heading="Housekeepers for your home "
            Service_Content="We source housekeepers who can keep your homes in order by performing multiple household chores including sweeping, mopping & dusting. We train them to operate with professionalism and precision. We also teach them how to do the laundry & keep the home equipment in good condition."
            Service_image={ImageCooking}
            Training_Heading="Training"
            Training_Content="The housekeepers, once deployed with you, will receive training in three areas:"
            Training_Heading1="Basics Of Housekeeping"
            Training_Content1="The fundamentals include making a bed, dusting different kinds of surfaces, washing and organizing utensils in the kitchen, sweeping, brooming & mopping of common areas in the house."
            Training_Heading2="Laundry Management"
            Training_Content2="This includes knowledge about the different types of laundry chemicals and their usage, washing and drying of clothes, their ironing, folding and storage."
            Training_Heading3="Equipment Management"
            Training_Content3="The housekeepers not only learn the operational know-how of cleaning equipment but also an understanding of how to maintain them with care."
            Values_Heading="Values"
            Values_Content="We intend to make our housekeepers diligent in their approach & efficient at managing the household chores. We try to inculcate in them an attention to detail that helps keep your home organized at all times. We expect them to be non-intrusive & discrete while at work, in line with our principle of respecting your privacy."
            Stories_Heading="Stories"
            Stories_Content="Let’s say you require somebody to help you reorganize your living area or set up an indoor garden – the housekeepers will help you do it."
          />
        </Box>
      </Box> */}
      {/* ================================Services Section For Teasting====================================== */}
    </>
  );
}

export default ContactUs;
