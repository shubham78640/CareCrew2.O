import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link} from "react-router-dom"
import sanityClient from "../../libs/client"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import "./singlePost.css";
import moment from "moment"
import { CircularProgress } from '@mui/material'



const builder = imageUrlBuilder(sanityClient)

const urlFor = (source) => {
    return builder.image(source)
}

export default function SinglePost() {
  const [postData, setPostData] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  const goBack = () => navigate('/')

  useEffect(() => {

    sanityClient.fetch(
          `*[slug.current == $slug]{
              title,
              publishedAt,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  }
              },
              body,
              "name": author->name,
              "authorImage": author->image,
            }`,
          { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(err => console.error(err))
  }, [slug])

  console.log("singlePost data = ", postData)

  if (!postData) return <div
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


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={postData.mainImage.asset.url}
          alt=""
        />
        <h1 className="singlePostTitle">
          {postData.title}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                <span style={{color:"#504f6b"}}>{postData.name}</span>
              </Link>
            </b>
          </span>
          <span>{moment(postData.publishedAt).format("MMMM Do YYYY")}</span>
        </div>
        {/* <p className="singlePostDesc"></p> */}
        </div>

        <div className='blockcontent' style={{width:"100%"}}>
                    <BlockContent
                        blocks={postData.body}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
        </div>
    </div>
  );
}

