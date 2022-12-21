import SinglePost from "../../../src/components/singlePost/SinglePost";
import Sidebar from "../../../src/components/sidebar/Sidebar"
import { Box } from "@mui/system";
import "./single.css";

export default function Single() {
  return (
    <Box className="single" sx={{flexDirection:{sm:"row", xs:"column"}}}>
      <SinglePost />
      <Sidebar/>
    </Box>
  );
}