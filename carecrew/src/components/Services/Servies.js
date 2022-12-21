import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "5px",
  justifyContent: "center",
}));

function Servies(props) {
  const {
    Service_Heading,
    Service_Content,
    Service_image,
    Training_Heading,
    Training_Content,
    Training_Heading1,
    Training_Content1,
    Training_Heading2,
    Training_Content2,
    Training_Heading3,
    Training_Content3,
    Values_Heading,
    Values_Content,
    Stories_Heading,
    Stories_Content,
  } = props;
  return (
    <>
      <Box p="5% 5%"
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#007a48", fontWeight: 600 }}
        >
          {Service_Heading}{" "}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {" "}
          {Service_Content}{" "}
        </Typography>
        <Box ml={0}>
          <Grid mt={4} container spacing={2}>
            <Grid lg={6} xs={12}>
              <Item
                sx={{ flexDirection: "column", justifyContent: "flex-start" }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  mt={1}
                  sx={{ color: "#007a48", fontWeight: 600 }}
                >
                  {Training_Heading}{" "}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {" "}
                  {Training_Content}{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  mt={1}
                  sx={{ fontWeight: 600 }}
                >
                  {Training_Heading1}{" "}
                </Typography>
                <Typography variant="body1" gutterBottom ml={2.5}>
                  {" "}
                  {Training_Content1}{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  mt={1}
                  sx={{ fontWeight: 600 }}
                >
                 
                  {Training_Heading2}{" "}
                </Typography>
                <Typography variant="body1" gutterBottom ml={2.5}>
                  {" "}
                  {Training_Content2}{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  mt={1}
                  sx={{ fontWeight: 600 }}
                >
                 
                  {Training_Heading3}{" "}
                </Typography>
                <Typography variant="body1" gutterBottom ml={2.5}>
                  {" "}
                  {Training_Content3}{" "}
                </Typography>
              </Item>
            </Grid>
            <Grid lg={6} xs={12}>
              <Item sx={{ justifyContent: "flex-start" }}>
                <img width="100%" src={Service_image} />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="h5"
          gutterBottom
          mt={5}
          sx={{ color: "#007a48", fontWeight: 600 }}
        >
          {Values_Heading}{" "}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {" "}
          {Values_Content}{" "}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          mt={4}
          sx={{ color: "#007a48", fontWeight: 600 }}
        >
          {Stories_Heading}{" "}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {" "}
          {Stories_Content}{" "}
        </Typography>
      </Box>
    </>
  );
}

export default Servies;
