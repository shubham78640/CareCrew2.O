import React from "react";
import CCHorizontal from "../../Images/CCHorizontal.png";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const BOX = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "5px",
});

const BOX1 = styled(Box)({
  padding: "15px",
  background: "#f4f4f4",


  
});

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Drawer() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <div id="offcanvasRightLabel">
            <img width={"30%"} src={CCHorizontal} alt="" />
          </div>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          {/* containt writing */}
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "1px" }}
          >
            <NavLink
              className="Navlink"
              to="/"
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "green" : "Black",
                };
              }}
            >
              <BOX1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <li style={{marginLeft:"25px"}}>Home</li>
              </BOX1>
            </NavLink>

            <NavLink
              className="Navlink"
              to="/aboutus"
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "green" : "Black",
                };
              }}
            >
              <BOX1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><li style={{marginLeft:"25px"}}>About Us</li></BOX1>
            </NavLink>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>Services</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <BOX>
             {Data.map((item)=>(
                  <NavLink
                  className="Navlink"
                  to={item.link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "green" : "black",
                    };
                  }}
                >
                  <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" style={{ padding: "10px" }}>{item.name}</li>
                </NavLink>
             ))}

              
                </BOX>
              </AccordionDetails>
            </Accordion>

            <NavLink
              className="Navlink"
              to="/contactus"
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "green" : "Black",
                };
              }}
            >
              <BOX1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><li style={{marginLeft:"25px"}}>Contact Us</li></BOX1>
            </NavLink>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>Jobs</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <BOX>
                  <NavLink
                    className="Navlink"
                    to="/jobs/jobsenglish"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "black",
                      };
                    }}
                  >
                    <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                      style={{
                        padding: "10px",
                      }}
                    >
                      Join Us{" "}
                    </li>
                  </NavLink>

                  <NavLink
                    className="Navlink"
                    to="/jobs/jobshindi"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "black",
                      };
                    }}
                  >
                    <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" style={{ padding: "10px" }}>हमसे जुड़ें</li>
                  </NavLink>
                </BOX>
              </AccordionDetails>
            </Accordion>

            <NavLink
              className="Navlink"
              to="/blogs"
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "green" : "Black",
                };
              }}
            >
              <BOX1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><li style={{marginLeft:"25px"}}>Blogs</li></BOX1>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

const Data = [
  {
    link:"/services/housekeeping",
    name:"Housekeeping"
  },
  {
    link:"/services/cooking",
    name:"Cooking"
  },
  {
    link:"/services/childcare",
    name:"Child Care"
  },
  {
    link:"/services/eldercare",
    name:"Elder Care"
  },
  {
    link:"/services/others",
    name:"Others"
  },
]