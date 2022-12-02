import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const BOX = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  textAlign: "justify",
  backgroundImage: `url("https://wallpapercave.com/wp/wp2561061.jpg")`,
  objectFit:"cover",
  padding:"40px"
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
  // lineHeight:{sm:"90px", xs:"5px"}
  
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
        <Box sx={{ p: 3 }}>
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
    <Box sx={{ width: "80%", margin: "auto" }} pt={5}>
      <Box
        sx={{
          margin: "auto",
          width: "92%",
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
          <Tab color="success" label="Mission" {...a11yProps(0)} />
          <Tab label="Vision" {...a11yProps(1)} />
          <Tab label="Values" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
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
              <Button color="success" variant="contained">
                {" "}
                Read More{" "}
              </Button>
            </Box>
          </BOX>
          <Box sx={{ width: { sm: "48%", xs: "100%" } }}>
            <img
              width={"100%"}
              src="https://www.eatright.org/-/media/eatrightimages/food/nutrition/eatingasafamily/family-dinner-flash-992108418.jpg"
              alt="Dinner"
            />
          </Box>
        </BOX1>
      </TabPanel>

      <TabPanel value={value} index={1}>
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
              <Button color="success" variant="contained">
                {" "}
                Read More{" "}
              </Button>
            </Box>
          </BOX>

          <Box sx={{ width: { sm: "48%", xs: "100%" } }}>
            <img
              width={"100%"}
              height={"100%"}
              src="https://elmedicointeractivo.com/wp-content/uploads/2017/10/vista-ojo-700x466.jpg"
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
              <Button color="success" variant="contained">
                {" "}
                Read More{" "}
              </Button>
            </Box>
          </BOX>

          <Box sx={{ width: { sm: "48%", xs: "100%" } }}>
            <img
              width={"100%"}
              src="https://www.juniper.net/content/dam/www/assets/images/us/en/company/juniper-value-rgb.png/jcr:content/renditions/cq5dam.web.1280.1280.png"
              alt="Dinner"
            />
          </Box>
        </BOX1>
      </TabPanel>
    </Box>
  );
}
