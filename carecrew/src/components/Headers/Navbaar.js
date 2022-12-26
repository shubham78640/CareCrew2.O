import React, { useState } from "react";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CCLogo from "../../Images/CCLogo.png";
import CCHorizontal from "../../Images/CCHorizontal.png";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import { NavLink, useParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./navbaar.css";
import { Button, styled, TextField } from "@mui/material";
import GetACallBackForm from "../Home/GetACallBackForm";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Dropdown from "../Dropdown/Dropdown";

const styleDiv = styled("div")({
  position: "absolute",
  margin: "24px 0px 0px -45px",
  width: "150px",
  background: "#007a48",
  padding: "10px",
});

function Navbaar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const [closeForm, setCloseForm] = useState(true);

  let user = localStorage.getItem('user')

  console.log(user)

  let { jobsenglish } = useParams();

  const handleDropdown = () => {
    setDropdown(true);
  };

  const handleDropdownclose = () => {
    setDropdown(false);
  };

  const handleDropdown1 = () => {
    setDropdown1(true);
  };

  const handleDropdownclose1 = () => {
    setDropdown1(false);
  };

  const handleCloseForm = () => {
    setCloseForm(false);
  };

  return (
    <Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box
          onMouseLeave={() => {
            handleDropdownclose1();
            handleDropdownclose();
          }}
          sx={{
            backgroundColor: "#72bf44",
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "fixed",
            zIndex: 999,
            gap: "10px",
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
          <a href="https://www.instagram.com/carecrew.in/" style={{ marginLeft: "35%" }} target="_blank">
            <InstagramIcon
              fontSize="6px"
              sx={{ color: "#ebe956", marginLeft: "35%" }}
            />
          </a>
          <a href="https://www.linkedin.com/showcase/care-crew-in/" target="_blank">
            <LinkedInIcon
              fontSize="6px"
              sx={{ color: "#ebe956", marginLeft: "10px" }}
            />
          </a>
          <a href="https://www.facebook.com/carecrew.in" target="_blank">
            <FacebookIcon
              fontSize="6px"
              sx={{ color: "#ebe956", marginLeft: "10px" }}
            />
          </a>
        </Box>

        <Box
          onMouseLeave={() => {
            handleDropdownclose1();
            handleDropdownclose();
          }}
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
            onMouseLeave={() => {
              handleDropdownclose1();
              handleDropdownclose();
            }}
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
            <li
              onMouseOver={() => {
                handleDropdownclose1();
                handleDropdownclose();
              }}
              onClick={handleDropdownclose}
            >
              About Us
            </li>
          </NavLink>
          {/* Dropdown menu1 */}
          <div
            onMouseEnter={handleDropdown1}
            className="link"
            style={{ position: "relative" }}
          >
            <NavLink
              className="Navlink"
              style={{ color: jobsenglish ? "#ebe956" : "white" }}
            >
              <li
                onMouseOver={() => {
                  handleDropdownclose();
                }}
              >
                Services <ArrowDropDownIcon sx={{ mt: "-2px" }} />
              </li>
            </NavLink>
            <div
              onMouseLeave={() => {
                handleDropdownclose1();
                handleDropdownclose();
              }}
              style={{
                position: "absolute",
                margin: "24px 0px 0px -45px",
                width: "170px",
                background: "white",
                padding: "10px",
                display: dropdown1 ? "block" : "none",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Dropdown name="Housekeeping" path="/services/housekeeping" />
              <Dropdown name="Cooking" path="/services/cooking" />
              <Dropdown name="Child Care" path="/services/childcare" />
              <Dropdown name="Elder Care" path="/services/eldercare" />
              <Dropdown name="Driving" path="/services/driver" />
              <Dropdown name="Others" path="/services/others" />
            </div>
          </div>
          {/* Dropdown menu1 */}

          <NavLink
            className="Navlink"
            to="/process"
            style={({ isActive }) => {
              return {
                color: isActive ? "#ebe956" : "white",
              };
            }}
          >
            <li
              onMouseOver={() => {
                handleDropdownclose1();
                handleDropdownclose();
              }}
            >
              How It Works
            </li>
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
            <li
              onMouseOver={() => {
                handleDropdownclose1();
                handleDropdownclose();
              }}
            >
              Contact Us
            </li>
          </NavLink>

          {/* Dropdown menu2 */}
          <div
            onMouseEnter={handleDropdown}
            className="link"
            style={{ position: "relative" }}
          >
            <NavLink
              className="Navlink"
              style={{ color: jobsenglish ? "#ebe956" : "white" }}
            >
              <li
                onMouseOver={() => {
                  handleDropdownclose1();
                }}
              >
                Jobs <ArrowDropDownIcon sx={{ mt: "-2px" }} />
              </li>
            </NavLink>
            <div
              onMouseLeave={() => {
                handleDropdownclose1();
                handleDropdownclose();
              }}
              style={{
                position: "absolute",
                margin: "24px 0px 0px -45px",
                width: "170px",
                background: "white",
                padding: "10px",
                display: dropdown ? "block" : "none",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Dropdown
                name="Join Us"
                dropdown={dropdown}
                setDropdown={setDropdown}
                path="/jobs/jobsenglish"
              />
              <Dropdown
                name="हमसे जुड़ें"
                dropdown={dropdown}
                setDropdown={setDropdown}
                path="/jobs/jobshindi"
              />
            </div>
          </div>
          {/* Dropdown menu2 */}

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
            <li
              onMouseOver={() => {
                handleDropdownclose1();
                handleDropdownclose();
              }}
            >
              Blogs
            </li>
          </NavLink>

          
         {user && <NavLink
            className="Navlink"
            to="/admin"
            style={({ isActive }) => {
              return {
                // borderBottom: isActive ? "2px solid #ebe956" : "2px solid #007a48",
                color: isActive ? "#ebe956" : "white",
              };
            }}
          >
            <li onMouseOver={()=>{handleDropdownclose1(); handleDropdownclose()}}>Admin</li>
          </NavLink>}
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

        {/* registration form */}
        <Box sx={{ display: closeForm ? "block" : "none" }}>
          <Box
            className="link"
            pt={4}
            pb={1}
            mt={5.4}
            sx={{
              backgroundColor: "#ebe956",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              width: "23%",
              zIndex: 999,
              borderRadius: "10px",
              minHeight: "555px",
              top: "80px",
              right: "12px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
            }}
          >
            <GetACallBackForm />
            <CancelIcon
              onClick={handleCloseForm}
              sx={{
                position: "absolute",
                top: "5px",
                right: "10px",
                color: "#007a48",
                cursor: "pointer",
                "&:hover": {
                  color: "#73bf45",
                  padding: "1px",
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "5px",
                left: "10px",
                color: "#007a48",
                cursor: "pointer",
                fontWeight: "999",
                fontSize: "20px",
              }}
            >
              Get A Call Back
            </Box>
          </Box>
        </Box>

        <Box
          className="link"
          padding={1}
          mt={5.4}
          sx={{
            position: "fixed",
            zIndex: 999,
            borderRadius: "0px 0px 12px 12px",
            top: "71px",
            right: "1px",
            display: !closeForm ? "block" : "none ",
            backgroundColor: "#ebe956",
          }}
        >
          <Button
            size="small"
            sx={{ color: "#007a48", fontWeight: "900" }}
            onClick={() => {
              setCloseForm(true);
            }}
            startIcon={<ArrowCircleDownIcon />}
          >
            Get a call back
          </Button>
        </Box>
        {/* registration form */}
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
        {/* registration form */}
        {/* <Box sx={{ display: closeForm ? "block" : "none" }}>
          <Box
            className="link"
            pt={4}
            pb={1}
            sx={{
              backgroundColor: "#ebe956",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              width: "85%",
              zIndex: 999,
              borderRadius: "10px",
              minHeight: "555px",
              top: "80px",
              right:"1px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
            }}
          >
            <GetACallBackForm />
            <CancelIcon
              onClick={handleCloseForm}
              sx={{
                position: "absolute",
                top: "5px",
                right: "10px",
                color: "#007a48",
                cursor: "pointer",
                "&:hover": {
                  color: "#73bf45",
                  padding: "1px",
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "5px",
                left: "10px",
                color: "#007a48",
                cursor: "pointer",
                fontWeight: "999",
                fontSize:"20px"
              }}
            >
              Get A Call Back
            </Box>
          </Box>
        </Box>

        <Box
          className="link"
          padding={1}
          mt={5.4}
          sx={{
            position: "fixed",
            zIndex: 999,
            borderRadius: "0px 0px 12px 12px",
            top: "17px",
            right: "1px",
            display: !closeForm ? "block" : "none ",
            backgroundColor: "#ebe956",
          }}
        >
          <Button
            size="small"
            sx={{ color: "#007a48", fontWeight: "900" }}
            onClick={() => {
              setCloseForm(true);
            }}
            startIcon={<ArrowCircleDownIcon />}
          >
            Get a call back
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
}

export default Navbaar;
