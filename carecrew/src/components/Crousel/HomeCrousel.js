import { Box } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { crouselData } from "../../AllData";

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
            />
            <Carousel.Caption>
              <motion.h5
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                style={{ color: "white" }}
              >
                {items.title}
              </motion.h5>
              <motion.p
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                style={{ color: "white" }}
              >
                {items.description}
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default HomeCrousel;
