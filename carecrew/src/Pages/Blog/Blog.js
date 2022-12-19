import React from 'react'
import "./blog.css"
import { Box } from "@mui/system";
import Post from "../../../src/components/post/Post"
import Sidebar from "../../../src/components/sidebar/Sidebar"


function Blog() {
  return (
    <div>
     <Box className="home" sx={{flexDirection:{sm:"row", xs:"column"}}}>
        <Post/>
        <Sidebar/>
     </Box>
    </div>
  )
}

export default Blog