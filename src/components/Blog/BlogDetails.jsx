import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as blogService from "../../services/blogService";

export default function BlogDetails() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        blogService.getOne(postId)
            .then(setPost)
    }, [postId]);

    console.log(post);
    return(
<>

<div className="page-nav details">
            <div className="container">
                <div className="row">
                    <h2 className="text-start">{post.title}</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                          <li><Link to="/blog">Blog</Link></li>
                        <li> {post.title}</li>
                    </ul>
                </div>
            </div>
        </div>

<div className="details-page">
        <div className="container">
            <div className="post-details">
                <div className="post-img">
                    <img src={post.imageUrl} alt=""/>
                </div>
                <div className="post-info">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <div className="creator-info">
                        <p>{post.date}</p>
                        <p>{post.creator}</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
           
    
            
 
    
</>
    );
}