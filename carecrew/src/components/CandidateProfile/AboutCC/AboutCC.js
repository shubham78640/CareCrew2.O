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
            fontSize:"35px",
            marginLeft:{sm:"20px", xs:"0"}
            
          }}
        >
          Why CARE CREW
        </Box>
          {/* <Box p={4} pt={0}>
          <h1 style={{ color: "rgba(0,122,72)" }}>Why CARE CREW</h1>
        </Box> */}

        <Box
          mt={4}
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            gap: "8%",
            justifyContent: "canter",
            padding: { sm: "2% 11%", xs: "1% 5%" },
          }}
        >
          <Box
            sx={{
              height: "200px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img src={ImageCooking} height={500} width={350} />
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
              <Box
                sx={{ fontSize: "17px", lineHeight: "27px" }}
              >
                At CARE CREW we are on a mission to transform the domestic help
                sector by recruiting, training and deploying verified Home
                Associates including housekeepers, home cooks, nannies and more.
                We strive to build a community of dependable and efficient house
                associates dedicated to providing a worry-free environment to a
                customer’s home.
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Trained Associates{" "}
                </Box>

                <Box>
                  Reliable, Professional & Skilled at household chores.
                </Box>
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  1-Day FREE Trial{" "}
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
                  Replacements for up to 6 months from the first deployment.
                </Box>
              </Box>
            </Box>
            <Box mt={3} sx={{ display: "flex", gap: "30px" }}>
              <TaskAltSharpIcon sx={{ color: "#007a48" }} />
              <Box mt={-0.5}>
                <Box
                  sx={{ color: "#007a48", fontSize: "16px", fontWeight: 500 }}
                >
                  Background Verified{" "}
                </Box>

                <Box>
                  Verified for identity and criminal court records.
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
