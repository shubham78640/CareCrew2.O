import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import sanityClient from "../../libs/client";
import { useState } from "react";
import { Box } from "@mui/material";
import image from "../../Images/s1.jpg"

export default function Sidebar() {
  const [data, setData]=useState([])
  useEffect(() => {
    
    sanityClient
    .fetch(
      `*[_type == 'category']{
        title,
        description
      }`
    )
    .then((data) => setData(data))
    .catch((err) => console.error(err));
  }, [])

  console.log("data is =>", data)
  
  return (
    <div className="sidebar" style={{marginTop:"70px"}}>
      <Box sx={{position:{sm:"fixed", xs:"initial"}}} className="sidebarItem">
        <span className="sidebarTitle">Blogs</span>
        <img
          src={image}
          alt=""
        />
        <p style={{textAlign:"justify", lineHeight:"28px"}}>
        Discover a wealth of practical tips and insights on Home Improvement, Food & Nutrition, Child Care, Elder Care and more to enhance your home and everyday life.
        </p>
      </Box>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div> */}
    </div>
  );
}