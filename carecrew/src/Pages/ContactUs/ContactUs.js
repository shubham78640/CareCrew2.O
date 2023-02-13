import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Contact from "../../components/Contact/Contact";
import { multiStepContext } from "../../Context/FormContext";

function ContactUs() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  return (
    <>
      <ScrollToTop smooth color="#007a47" />
      <Box sx={{ backgroundColor: "#F4F8FD", height: "auto" }}>
        <Contact />
      </Box>

      <Box p={5} mb={-7} sx={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2063055398394!2d77.091636!3d28.473332999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f217d84f5a9%3A0xdb16d79eda45c82a!2sPinch!5e0!3m2!1sen!2sin!4v1669972130601!5m2!1sen!2sin"
          width="90%"
          height="450"
          style={{ border: 0, marginBottom: "70px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      <Footer />
    </>
  );
}

export default ContactUs;
