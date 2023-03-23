import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import keys from "../config/keys";
import axios from "axios";

const Blog = () => {
  const [blogData, setBlogData] = useState()

    useEffect(() => {
      axios.get(`https://vita-web-design-api.herokuapp.com/api/posts`,{
        headers:{
          "Access-Control-Allow-Origin": "https://www.vitawd.com",
          "Access-Control-Allow-Headers": "Special-Request-Header",
          "Access-Control-Allow-Credentials": true,
          "accepts":"application/json"
        }
      }).then(
        response => response.json()
      ).then(
        data => {
          setBlogData(data)
        }
      )
    }, [])

  const renderPosts = () => {
    return blogData ? (
      blogData.map(post => {
        return (
          <div key={post._id} className="post-list-div">
            <Link to={`/blog/post/${post._id}`}><div className="row">
              <div className="col-4">
                <img  className="post-thumbnail" src={post.cover_image_src} />
              </div>
              <div className="col-7 post-title">
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
                <p className="time-stamp">{post.time_stamp}</p>
              </div>
            </div></Link>
          </div>
        )
      })
    ) : (
      <div id="no-posts">
        <h1 className="text-center">No Posts Yet</h1>
      </div>
    )
  }

  return (
    <div>
      <div id="blog-posts-container">
        {renderPosts()}
      </div>
    </div>
  )
}

export default Blog;