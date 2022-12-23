import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import imgaboutus from "../../Images/bg-tab-section.png";
import imageAboutUs1 from "../../Images/1-4.jpg";
import imageAboutUs2 from "../../Images/mission-scaled.jpeg";
import imageAboutUs3 from "../../Images/values-scaled.jpeg";
import { Link } from "react-router-dom";

const BOX = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  textAlign: "justify",
  backgroundImage: `url(${imgaboutus})`,
  objectFit: "cover",
  padding: "40px",
});

const BOX1 = styled(Box)({
  display: "flex",
  justifyContent: "center",
  textAlign: "justify",
});

const H2 = styled("h2")({
  color: "#007a48",
  fontWeight: "800",
});

const P = styled("p")({
  color: "#3a4268",
  lineHeight:"30px"
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutUs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { sm: "80%", xs: "100%" }, margin: "auto" }} pt={5}>
      <Box
        sx={{
          margin: "auto",
          width: { sm: "93%", xs: "92%" },
          borderBottom: "1px solid #edeff5",
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ color: "#72bf44" }} label="Mission" {...a11yProps(0)} />
          <Tab sx={{ color: "#72bf44" }} label="Vision" {...a11yProps(1)} />
          <Tab sx={{ color: "#72bf44" }} label="Values" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <BOX1 sx={{ flexDirection: { sm: "row", xs: "column-reverse" } }}>
          <BOX
            flexDirection={"column"}
            sx={{ width: { sm: "48%", xs: "100%" } }}
          >
            <H2>Enhance well-being</H2>
            <P>
              Not only do we want to simplify the daily routines of our
              customers by bringing about greater comfort & convenience to them
              at their homes, we also want to integrate the domestic help
              community into the formal economy & enhance their well-being.
            </P>

            <Box display={"flex"} justifyContent={"left"}>
            <Link to="/aboutus">
              <Button sx={{textTransform:"none"}} color="success" variant="contained">
                {" "}
                Read More{" "}
              </Button>
              </Link>
            </Box>
          </BOX>
          <Box sx={{ width: { sm: "48%", xs: "100%" } }}>
            <img width={"100%"} style={{maxHeight:"360px"}} src={imageAboutUs1} alt="Dinner" />
          </Box>
        </BOX1>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <BOX1 sx={{ flexDirection: { sm: "row", xs: "column-reverse" } }}>
          <BOX
            flexDirection={"column"}
            sx={{ width: { sm: "48%", xs: "100%" } }}
          >
            <H2>Be the most trusted</H2>
            <P>
              We want to become the most trusted source of reliable house helps
              for customers. At the same time, we also want to be seen as the
              most trusted employment provider by the domestic help community.
            </P>

            <Box display={"flex"} justifyContent={"left"}>
            <Link to="/aboutus">
              <Button sx={{textTransform:"none"}} color="success" variant="contained">
                {" "}
                Read More{" "}
              </Button>
              </Link>
            </Box>
          </BOX>

          <Box sx={{ width: { sm: "48%", xs: "100%" } }}>
            <img
              width={"100%"}
              src={imageAboutUs2}
              alt="Dinner"
            />
          </Box>
        </BOX1>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <BOX1 sx={{ flexDirection: { sm: "row", xs: "column-reverse" } }}>
          <BOX
            flexDirection={"column"}
            sx={{ width: { sm: "48%", xs: "100%" } }}
          >
            <H2>Underpinned by equality</H2>
            <P>
              Our four key values of respect, fairness, wellbeing & inclusive
              holistic growth are based on the fundamental principle of equality
              & keeping the interests of both our customers & our house helps at
              the centre of all our actions.
            </P>

            <Box display={"flex"} justifyContent={"left"}>
            <Link to="/aboutus">
              <Button sx={{textTransform:"none"}} color="success" variant="contained">
                {" "}
                Read More{" "}
              </Button>
              </Link>
            </Box>
          </BOX>

          <Box sx={{ width: { sm: "48%", xs: "100%" } }}>
            <img width={"100%"} src={imageAboutUs3} alt="Dinner" />
          </Box>
        </BOX1>
      </TabPanel>
    </Box>
  );
}
