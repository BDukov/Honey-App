import { useEffect, useState } from "react";
import BlogPost from "../../components/Blog/BlogPost";
import * as blogService from "../../services/blogService";

import "./Blog.css";

export default function Blog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    blogService.getAll().then((result) => setPosts(result));
  }, [posts]);


  return (
    <>
      <div id="blog" className="blog">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-bolder">Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="row-blog">
          {posts.slice(-3).map((post) => {
                let keys = Object.keys(post).join('');
                let data = Object.values(post);

                return <BlogPost key={keys} id={keys} {...data[0]} />
             
            })}
          </div>
        </div>
      </div>
    </>
  );
}
