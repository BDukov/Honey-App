import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
<h1> DETAILS</h1>
<h2>{post.title}</h2>
</>
    );
}