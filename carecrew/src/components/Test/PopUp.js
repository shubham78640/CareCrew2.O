import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PopUp(props) {
  const { open, open1, setOpen, setOpen1, data } = props;

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOpen1 = () => {
    setOpen1((prev) => !prev);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClickOpen}
        fullWidth="xl"
        maxWidth={"md"}
        // sx={{width:{sm:"800px", xs:"400px"}}}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        <DialogTitle
        //    id="alert-dialog-title"
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                textAlign: "center",
                color: "#007a48",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Profile Details
            </Box>
            <Button onClick={handleClickOpen}>
              <CancelIcon />
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
              gap: "4%",
            }}
          >
            <Box sx={{height:{sm:"350px", xs:"100%"}}}>
              <img src={data?.image?data?.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rzr5yCjWIMDSeo2uKEkNUIx3yOSwwBZP8w&usqp=CAU"} height="100%" width="100%" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px"}}>
              <h1 style={{color: "#007a48"}}> {data?.name}</h1>

              {/* <Box mt={-1}>Age: {data?.age}</Box> */}
              <Box mt={-1}>Gender: {data?.gender}</Box>
              <Box>Location: {data?.location}</Box>
              <Box>Skills: {data?.skills}</Box>
              <Box>Work Time: {data?.worktime}</Box>
              <Box>Language: {data?.language?data?.language:"Hindi"}</Box>
              <Box>Experience: {data?.Experience}</Box>
              <Box>Training Details: {data?.trainingDetails}</Box>


              {/* {
    "gender": "Female",
    "skills": "Cooking",
    "experience": "6 years",
    "worktime": "",
    "age": "",
    "language": "",
    "image": "",
    "location": "Chakkarpur, Gurugram",
    "trainingDetails": "Home Cook available on demand, whenever you need"
} */}
              
              <Button
                sx={{
                  marginTop: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="contained"
                color="success"
                onClick={handleClickOpen1}
              >
                Book A Trial
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={open1} onClose={handleClickOpen1}>
        <DialogTitle>
          {" "}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>Profile Details</Box>
            <Button onClick={handleClickOpen1}>
              <CancelIcon />
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={data?.name}
            disabled={true}
            id="name"
            label="Candidate Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="Address"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Suitable Time to Call"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen1}>Cancel</Button>
          <Button
            onClick={() => {
              navigate("/thankyou");
            }}
          >
            Book a Trial
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PopUp;
