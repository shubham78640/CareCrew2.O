import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import sanityClient from "../../libs/client";
import { useState } from "react";

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
    <div className="sidebar" style={{marginTop:"60px"}}>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://nqwebdesign.com/wp-content/uploads/2020/01/blog-icon-300x300.png"
          alt=""
        />
        <p>
        We source & deploy house helps skilled in any one or more types of household chores. From basic tasks like sweeping, mopping, cooking to more complex tasks like laundry, child care and driving, we have them all covered.
        </p>
      </div>
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