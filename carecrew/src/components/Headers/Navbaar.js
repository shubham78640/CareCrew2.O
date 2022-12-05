import React, { useState } from "react";
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
import { NavLink, Link, useParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./navbaar.css";

function Navbaar() {
  const [dropdown, setDropdown] = useState(false);

  let { jobsenglish } = useParams();

  const handleDropdown = () => {
    setDropdown(true);
  };

  const handleDropdownclose = () => {
    setDropdown(false);
  };

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
          <Box sx={{ color: "#ebe956", fontSize: "12px", fontWeight: "400"}}>
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
          <a href="mailto:help@carecrew.in" target="_blank" rel="noreferrer">
            <EmailIcon
              fontSize="10px"
              sx={{ color: "#ebe956", marginLeft: "30px", marginBottom: "3px" }}
            />
          </a>{" "}
          &nbsp;
          <Box sx={{ color: "#ebe956", fontSize: "12px", fontWeight: "400" }}>
            <span
              style={{ color: "white", fontSize: "12px", fontWeight: "600" }}
            >
              E-mail us:
            </span>
            &nbsp;help@carecrew.in
          </Box>
          <a href="" style={{ marginLeft: "35%" }}>
            <InstagramIcon
              fontSize="6px"
              sx={{ color: "#ebe956", marginLeft: "35%" }}
            />
          </a>
          <a href="">
            <LinkedInIcon
              fontSize="6px"
              sx={{ color: "#ebe956", marginLeft: "10px" }}
            />
          </a>
          <a href="">
            <FacebookIcon
              fontSize="6px"
              sx={{ color: "#ebe956", marginLeft: "10px" }}
            />
          </a>
        </Box>

        <Box
          className="link"
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
          <NavLink
            className="Navlink"
            to="/"
            style={({ isActive }) => {
              return {
                // borderBottom: isActive ? "2px solid #ebe956" : "2px solid #007a48",
                textDecoration: "none",
                color: isActive ? "#ebe956" : "white",
              };
            }}
          >
            <li onClick={handleDropdownclose}>Home</li>
          </NavLink>

          <NavLink
            className="Navlink"
            to="/aboutus"
            style={({ isActive }) => {
              return {
                color: isActive ? "#ebe956" : "white",
              };
            }}
          >
            <li onClick={handleDropdownclose}>About Us</li>
          </NavLink>

          <NavLink
            className="Navlink"
            to="/contactus"
            style={({ isActive }) => {
              return {
                color: isActive ? "#ebe956" : "white",
              };
            }}
          >
            <li onMouseOver={handleDropdownclose}>Contact Us</li>
          </NavLink>

          {/* Dropdown menu */}
          <div onMouseEnter={handleDropdown} className="link" style={{ position: "relative" }}>
            <NavLink
              className="Navlink"
              style={{ color: jobsenglish ? "#ebe956" : "white" }}
            >
              <li  >
                Jobs <ArrowDropDownIcon sx={{ mt: "-2px" }} />
              </li>
            </NavLink>
            <div
             onMouseLeave={handleDropdownclose}
              style={{
                position: "absolute",
                margin: "24px 0px 0px -45px",
                width: "150px",
                background: "#007a48",
                padding: "10px",
                display: dropdown ? "block" : "none",
              }}
            >
              <NavLink
                className="Navlink"
                to="/jobs/jobsenglish"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#ebe956" : "white",
                  };
                }}
              >
                <li
                  style={{ borderBottom: "1px solid black", padding: "10px" }}
                 
                >
                  Join Us{" "}
                </li>
              </NavLink>

              <NavLink
                className="Navlink"
                to="/jobs/jobshindi"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#ebe956" : "white",
                  };
                }}
              >
                <li  style={{ padding: "10px" }}>
                  हमसे जुड़ें
                </li>
              </NavLink>
            </div>
          </div>
          {/* Dropdown menu */}

          <NavLink
            className="Navlink"
            to="/blogs"
            style={({ isActive }) => {
              return {
                // borderBottom: isActive ? "2px solid #ebe956" : "2px solid #007a48",
                color: isActive ? "#ebe956" : "white",
              };
            }}
          >
            <li onMouseOver={handleDropdownclose}>Blogs</li>
          </NavLink>
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
          <MenuIcon
            fontSize="large"
            sx={{ mr: 1 }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          />
          <Drawer />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbaar;
