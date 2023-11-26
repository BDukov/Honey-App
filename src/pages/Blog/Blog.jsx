import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import BlogPost from "../../components/Blog/BlogPost";
import * as blogService from "../../services/blogService";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    blogService.getAll().then((result) => setPosts(result));
  }, [posts]);



 
  return (
    <>
      <div className="page-nav">
        <div className="container">
          <div className="row">
            <h2 className="text-start">Our Blogs</h2>
            <ul>
              {user &&
              <li>
                <Link to="/blog/create">
                  <i className="bi bi-house-door"></i> Add Blog post
                </Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>

      <div id="blog-page" className="blog-page">
        <div className="container-page">
          <div className="row-blog">
            {posts.map((post) => {
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
