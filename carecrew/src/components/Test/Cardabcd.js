import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import PopUp from "./PopUp";


function Cardabcd(props) {
    const { Cardimage, CardHeading, CardContentLines, link, data,SkillSet, ExpectedSalary } = props;
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

  return (
    <>
    <PopUp open={open} open1={open1} setOpen = {setOpen} setOpen1={setOpen1} data= {data}/> 

        <Card
          sx={{
            width: 320,
            height: 380,
            ":hover": {
              boxShadow: 20,
             
            },
          }}
        >
          <CardActionArea height="328">
            <CardMedia
              component="img"
          //    sx={{width:"200px", height:"200px", justifyContent:"center", margin:"auto"}}
               height="200px"
              width="170px"
              image={Cardimage}
              alt="CARECREW Candidate Profile"
            />
            <CardContent sx={{ backgroundColor: "", height: "230px" , display:"flex", flexDirection:"column"}}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ color: "green" }}
                component="div"
              >
                {CardHeading}
              </Typography>
              <Typography variant="body2" color="text.secondary">Skillset : 
                {SkillSet}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Expected Salary : {ExpectedSalary}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {CardContentLines}
              </Typography> */}
              <Button onClick={() => setOpen(true)} sx={{marginTop:"10px",alignItems:"center",justifyContent:"center"}}variant="contained" color="success">View More</Button>
            </CardContent>
          </CardActionArea>
        </Card>
    

    </>
  )
}

export default Cardabcd