import React from "react";
import Box from "@mui/material/Box";
import TaskAltSharpIcon from "@mui/icons-material/TaskAltSharp";
import ImageCooking from "../../../Images/HK2.jpg";
function AboutCC() {
  return (
    <>
      <Box mt={10} sx={{ height: "200px" }}>
        <Box
          sx={{
            textAlign: "center",
            color: "#007a48",
            fontSize: "25px",
            fontWeight: "500",
          }}
        >
          About CARECREW
        </Box>

        <Box
          mt={10}
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            gap: "8%",
            justifyContent: "canter",
            padding:{sm:"2% 11%", xs:"1% 5%"} ,
          }}
        >
          <Box
            sx={{
              height: "200px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={ImageCooking}
              height={500}
              width={350}
            />
          </Box>

          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              marginTop: { sm: "0px", xs: "350px" },
            }}
          >
            <Box>
             
              <Box  sx={{ color: "#007a48" , fontSize:"17px", lineHeight:"27px"}}>
                At CARE CREW we are on a mission to transform the domestic help
                sector by sourcing, training and deploying verified helps
                including housekeepers, home cooks, nannies and more. We strive
                to build a community of dependable and efficient house helps
                dedicated to providing a worry-free environment to a customer’s
                home.
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Verified and Trained Helps{" "}
                </Box>

                <Box>
                  Verified and trained for reliability and professionalism.
                </Box>
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Free Trial{" "}
                </Box>

                <Box>
                  One-day free trial to assess the service and ensure a perfect
                  fit.
                </Box>
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Easy Replacements{" "}
                </Box>
                <Box>
                  Unlimited replacements for 6 months from the first deployment.
                </Box>
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Transparent Process{" "}
                </Box>

                <Box>
                  Complete visibility on the skills and experience of the helps.
                </Box>
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Relationship Officer
                </Box>

                <Box>
                  Continued assistance throughout the process and after
                  deployment, ensuring a seamless experience.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutCC;
