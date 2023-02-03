import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { format } from "timeago.js";
import "./post.css";
import sanityClient from "../../libs/client";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

export default function Post() {
  const [allPostsData, setAllPostsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
            title,
            about,
            publishedAt,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`
      )
      .then((data) => setAllPostsData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!allPostsData) return <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height:"80vh",
    
  }}
  className="allPost"
>
  <CircularProgress color="success" />
</div>

console.log(allPostsData)

  return (
    <Box className="allPost" sx={{}}>
      {allPostsData &&
        allPostsData.map((item, index) => (
          <div className="post" key={index}>
            <img className="postImg" src={item.mainImage.asset.url} alt="" />
            <div className="postInfo">
              <span className="postTitle">
                <NavLink
                  to={"/blogs/" + item.slug.current}
                  key={item.slug.current}
                  className="link"
                >
                  {item.title}
                </NavLink>
              </span>
              <hr />
              <span className="postDate">{format(item.publishedAt)}</span>
            </div>
            <p className="postDesc">{item.about}</p>
          </div>
        ))}
    </Box>
  );
}
