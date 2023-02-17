import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
function CradComponent(props) {
  const { Cardimage, CardHeading, CardContentLines, link } = props;
  return (
    <>
    <div>
      <NavLink
        style={{ textDecoration: "none" }}
        to={link}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Card
          sx={{
            width: 350,
            height: 300,
            ":hover": {
              boxShadow: 20,
             
            },
          }}
        >
          <CardActionArea height="318">
            <CardMedia
              component="img"
              height="170px"
              width="50"
              image={Cardimage}
              alt="green iguana"
            />
            <CardContent sx={{ backgroundColor: "", height: "130px" }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ color: "green" }}
                component="div"
              >
                {CardHeading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {CardContentLines}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </NavLink>
      </div>
    </>
  );
}

export default CradComponent;
