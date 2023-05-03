import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import keys from "../config/keys";
import axios from "axios";
import loadingImage from "./pictures/Animation.png"

const Post = () => {
  const [postData, setPostData] = useState();
  const { _id } = useParams();
  const postImages = {
    GoodWebsite: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }

  useEffect(() => {
    axios.get(`https://vita-web-design-api.herokuapp.com/api/post/${_id}`, {
      headers:{
        "Access-Control-Allow-Origin": "https://www.vitawd.com",
        "Access-Control-Allow-Credentials": true,
        "accepts":"application/json"
      }
    }).then(
      response => setPostData(response.data[0])
      )
  }, []);
  
  document.querySelector('[property="og:image"]').setAttribute("content", postImages.GoodWebsite)

  return postData ? (
    <div className="container" id="individual-post">
      <Link to="/blog" className="back-button">Back</Link>
      <h1 className="post-full-title">{postData.title}</h1>
      <h3 className="time-stamp">Written by {postData.author} on {postData.time_stamp}</h3>
      <div className="container post-full-content">
        <img className="post-image-styling" src={postData.cover_image_src} />
        <p className="post-content-text" id="post-content">{postData.content}</p>
        <p className="photo-credit">{postData.photo_credit}</p>
      </div>
    </div>
  ) : (
    <img className="loading" src={loadingImage} />
  )
}

export default Post;