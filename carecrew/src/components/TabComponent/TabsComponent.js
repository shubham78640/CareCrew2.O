import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const P = styled("p")({
  color: "#3a4268",
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

function TabsComponent(props) {
  const {
    Contentfortab1,
    Contentfortab2,
    Contentfortab3,
    labelfortab1,
    labelfortab2,
    labelfortab3,
  } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "82%", margin: "auto" }} pt={10}>
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
            textColor="secondary"
            indicatorColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
      
          
          >
            <Tab   sx={{color:"#72bf44",fontWeight:"600"}} label={labelfortab1} {...a11yProps(0)} />
            <Tab sx={{color:"#72bf44",fontWeight:"600"}}  label={labelfortab2} {...a11yProps(1)} />
            <Tab  sx={{color:"#72bf44",fontWeight:"600"}}  label={labelfortab3} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <P>{Contentfortab1}</P>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <P>{Contentfortab2}</P>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <P>{Contentfortab3}</P>
        </TabPanel>
      </Box>
    </>
  );
}

export default TabsComponent;
