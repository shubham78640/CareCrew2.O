import { Box, styled, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
// import { motion } from "framer-motion";
import { crouselData } from "../../AllData";

const P = styled('p')({
  color:"white",
  display:"grid",
  justifyContent:"left"
})

function HomeCrousel() {
  return (
    <Box
      sx={{
        position: "relative",
        top: { sm: "112px", xs: "60px" },
      }}
    >
      <Carousel variant="dark">
        {crouselData.map((items) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={items.imagePath}
              alt="First slide"
              style={{maxHeight:"600px"}}
            />
            <Carousel.Caption style={{display:"grid", justifyContent:"left", alignItems:"center", gap:"10px"}}>
              <Typography variant="h3"
                sx={{ color: "white", fontWeight:{ sm: "800", xs: "500" } , fontSize: { sm: "45px", xs: "20px" },}}
              >
                House Helps for Every Home
              </Typography>
              <Box mt={1} sx={{display:"grid", justifyContent:"left",alignItems:"center", lineHeight:{ sm: "20px", xs: "10px" }, marginBottom:{sm:31, xs:0}}} >
                <P sx={{fontWeight:{ sm: "600", xs: "500" },width:"100%", fontSize:{ sm: "23px", xs: "14px" }}}>&#x2714; Professional Training.</P>
                <P sx={{fontWeight:{ sm: "600", xs: "500" },width:"100%", fontSize:{ sm: "23px", xs: "14px" }}}>&#x2714; Unlimited Replacements.</P>
                {/* <P sx={{fontWeight:{ sm: "600", xs: "500" },width:"100%", fontSize:{ sm: "23px", xs: "14px" }}}>&#x2714; Zero Registration Fee.</P> */}
              </Box>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default HomeCrousel;