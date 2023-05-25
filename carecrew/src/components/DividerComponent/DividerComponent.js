import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink, Link, useParams } from "react-router-dom";
import "../Headers/navbaar.css";

const style = {
  bgcolor: "background.paper",
};

const deviderStyle = {
  position: { sm: "sticky", xs: "static" },
  top: 172,
  left: 60,
  width: "330px",
};

function DividerComponent() {
  return (
    <>
      <Box bgcolor="white" sx={deviderStyle}>
        <Box mt={9} sx={{ paddingLeft: { sm: "33%", xs: "15%" } }}>
          <hr
            style={{
              color: "#6ec1e4",
              backgroundColor: "#6ec1e4",
              width: "100%",
              border: "3px solid #6ec1e4",
            }}
          />
          <Typography
            variant="h4"
            gutterBottom
            mt={5}
            mb={8.5}
            sx={{ color: "#007a48", fontWeight: 600 }}
          >
            Our Services
          </Typography>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <NavLink
              to="/services/housekeeping"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="Housekeeping" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to="/services/cooking"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="Cooking" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/services/childcare"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="Child Care" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to="/services/eldercare"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="Elder Care" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to="/services/driver"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="Driving" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to="/services/ondemand"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="On-Demand" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              to="/services/others"
              style={({ isActive }) => ({
                color: isActive ? "#007a47" : "#007a48",
              })}
              onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }}
            >
              <ListItem button divider>
                <ListItemText primary="Others" />
              </ListItem>
            </NavLink>
            <Divider />
          </List>
        </Box>
      </Box>
    </>
  );
}

export default DividerComponent;
