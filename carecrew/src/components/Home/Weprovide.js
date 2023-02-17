import { Box, Button, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import VerifiedIcon from "@mui/icons-material/Verified";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { multiStepContext } from '../../Context/FormContext';


const BOX = styled(Box)({
    backgroundImage: `url("http://carecrew.in/wp-content/uploads/2022/02/wharwedo.png")`,
    backgroundSize: "100%",
    backgroundRepeat:"no-repeat"
  });

function Weprovide() {
    const { closeForm, setCloseForm } = useContext(multiStepContext);

    // const [closeForm, setCloseForm] = useState(true)
  
    const handleOpen = () => {
      setCloseForm(true);
    };
  return (
    <Box mb={4}>
<Box
    width={"100%"}
    display={"flex"}
    justifyContent={"space-between"}
    gap={2}
    sx={{
      flexDirection: { sm: "row", xs: "column" },
      mt: { sm: "15%", xs: "25%" },
    }}
  >
    <Box
      sx={{
        width: { sm: "48%", xs: "100%" },
        height: { sm: "800px", xs: "455px" },
      }}
    >
      <BOX
        sx={{
          width: { sm: "48%", xs: "100%" },
          height: {xs: "455px", sm:"100%"},
          display: "grid",
          justifyContent: "right",
          alignItems: "flex-end",
          p: { sm: "20px", xs: "10px" },
        }}
        position={"absolute"}
      >
        {/* <img
          width={"100%"}
          style={{ position: "absolute" }}
          src="http://carecrew.in/wp-content/uploads/2022/02/wharwedo.png"
          alt="no Image"
        /> */}

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            // justifyContent:"right",
          }}
        >
          <Box style={{ display: "flex", gap: "20px" }}>
            <VerifiedIcon
              sx={{
                fontSize: { sm: "3rem", xs: "2rem" },
                color: "#73bf43",
              }}
            />
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: "#007a48",
                  fontWeight: "bolder",
                  fontSize: { sm: "25px", xs: "15px" },
                }}
              >
                500<sup>+</sup>
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: { sm: "14px", xs: "10px" } }}
              >
                hour of training <br /> deliverd
              </Typography>
            </div>
          </Box>
          <div style={{ display: "flex", gap: "20px" }}>
            <Diversity1Icon
              sx={{
                fontSize: { sm: "3rem", xs: "2rem" },
                color: "#73bf43",
              }}
            />
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: "#007a48",
                  fontWeight: "bolder",
                  fontSize: { sm: "25px", xs: "15px" },
                }}
              >
                10<sup>+</sup>
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: { sm: "14px", xs: "10px" } }}
              >
                years of experience
              </Typography>
            </div>
          </div>
        </Box>
      </BOX>
      <Box></Box>
    </Box>

    <Box sx={{ width: { sm: "48%", xs: "100%" } }} padding={4}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        p={1}
        width={"100%"}
        borderTop={"1px solid #edeff5"}
      >
        <Typography variant="p" sx={{ color: "#72bf44" }}>
          We provide
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#007a48", fontWeight: "700" }}
        >
          {" "}
          Full-time house helps
        </Typography>
        <Typography
          variant="p"
          sx={{
            width: { sm: "60%", xs: "90%" },
            fontWeight: "400",
            fontSize: "17px",
            lineHeight: "27px",
            color: "#3a4268",
          }}
        >
          We source & deploy house helps skilled in any one or more types of
          household chores. From basic tasks like sweeping, mopping, cooking
          to more complex tasks like laundry, child care and driving, we
          have them all covered.
        </Typography>

        <Box>
          <Box display={"flex"} gap={1}>
            <DoneOutlineIcon
              sx={{ color: "#72bf44", fontSize: "18px", mt: "7px" }}
            />
            <Box>
              <Typography variant="h6" color={"#3a4268"} fontSize={"19px"}>
                Transparent Process
              </Typography>
              <Typography variant="p" color={"#3a4268"}>
                Interviews, trials & unlimited replacements
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box display={"flex"} gap={1}>
            <DoneOutlineIcon
              sx={{ color: "#72bf44", fontSize: "18px", mt: "7px" }}
            />
            <Box>
              <Typography variant="h6" color={"#3a4268"} fontSize={"19px"}>
                Zero Registration Fee
              </Typography>
              <Typography variant="p" color={"#3a4268"}>
                Charges only post successful trial
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box display={"flex"} gap={1}>
            <DoneOutlineIcon
              sx={{ color: "#72bf44", fontSize: "18px", mt: "7px" }}
            />
            <Box>
              <Typography variant="h6" color={"#3a4268"} fontSize={"19px"}>
                Relationship Officer
              </Typography>
              <Typography variant="p" color={"#3a4268"}>
                A singe point of contact for all your queries
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box display={"flex"} gap={1}>
            <DoneOutlineIcon
              sx={{ color: "#72bf44", fontSize: "18px", mt: "7px" }}
            />
            <Box>
              <Typography variant="h6" color={"#3a4268"} fontSize={"19px"}>
                On-the-job Online Training
              </Typography>
              <Typography variant="p" color={"#3a4268"}>
                Continual training by 5-star hotel executives
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          onClick={handleOpen}
          variant="contained"
          color="success"
          sx={{
            width: { sm: "40%", xs: "80%", p: 1 },
            ml: "25px",
            mt: "20px",
            textTransform: "none",
          }}
        >
         Request a callback
        </Button>
      </Box>
    </Box>
  </Box>
  </Box>
  )
}

export default Weprovide