import React from "react";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Home from "../Home/Home";
import CCLogo from "../../Images/CCLogo.png";
import CCHorizontal from "../../Images/CCHorizontal.png";
import { Tab } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";

function Navbaar() {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box
          sx={{
            backgroundColor: "#72bf44",
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "fixed",
            zIndex: 999,
          }}
        >
          <CallIcon
            fontSize="6px"
            sx={{ color: "#ebe956", marginLeft: "25%" }}
          />{" "}
          &nbsp;
          <Box sx={{ color: "#ebe956", fontSize: "12px", fontWeight: "400" }}>
            <span
              style={{ color: "white", fontSize: "12px", fontWeight: "600" }}
            >
              Call us:
            </span>
            &nbsp;080-6201-2086
          </Box>
          <hr
            style={{
              height: "15px",
              marginLeft: "30px",
              border: "dashed black",
              width: "0.5px",
            }}
          />
          <EmailIcon
            fontSize="6px"
            sx={{ color: "#ebe956", marginLeft: "30px" }}
          />{" "}
          &nbsp;
          <Box sx={{ color: "#ebe956", fontSize: "12px", fontWeight: "400" }}>
            <span
              style={{ color: "white", fontSize: "12px", fontWeight: "600" }}
            >
              E-mail us:
            </span>
            &nbsp;help@carecrew.in
          </Box>
          <InstagramIcon
            fontSize="6px"
            sx={{ color: "#ebe956", marginLeft: "35%" }}
          />
          <LinkedInIcon
            fontSize="6px"
            sx={{ color: "#ebe956", marginLeft: "10px" }}
          />
          <FacebookIcon
            fontSize="6px"
            sx={{ color: "#ebe956", marginLeft: "10px" }}
          />
        </Box>
        <Box
          padding={3}
          mt={5.4}
          sx={{
            backgroundColor: "#007a48",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            width: "100%",
            gap: "30px",
            zIndex: 999,
          }}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>How it Works</li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>Jobs</li>
          <li>Blogs</li>
        </Box>

        <Box
          p={1}
          mt={"3px"}
          sx={{
            position: "fixed",
            zIndex: 999,
            width: "10%",
            height: "16%",
            backgroundColor: "#ebe956",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0 0 10px 10px",
            marginLeft: "100px",
          }}
        >
          <motion.img
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            width={"90%"}
            src={CCLogo}
          />
        </Box>
      </Box>

      {/* Responsive */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Box
          sx={{
            backgroundColor: "White",
            display: "flex",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            zIndex: 999,
            height: "60px",
            justifyContent: "space-between",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
          pl={2}
        >
          <motion.img
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            width={"30%"}
            src={CCHorizontal}
          />
          <MenuIcon  fontSize="large" sx={{ mr: 1 }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"/>
          <Drawer/>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbaar;