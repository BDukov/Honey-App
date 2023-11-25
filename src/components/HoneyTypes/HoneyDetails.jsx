import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as honeyTypeService from "../../services/honeyTypeService";

export default function HoneyDetails() {
    const [post, setPost] = useState({});
    const { postId } = useParams();



    useEffect(() => {
        honeyTypeService.getOne(postId)
            .then(setPost)


    }, [postId]);


    useEffect(() => {
        honeyTypeService.getOne(postId)
        .then(setPost)
    }, [post]);

    return(
        <>
        <div className="page-nav details">
            <div className="container">
                <div className="row">
                    <h2 className="text-start">DETAILS</h2>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
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

                    </div>
                </div>
            </div>

            </div>
        </div>
        </>
    );
}