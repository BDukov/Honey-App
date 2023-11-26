import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BlogPost from "../../components/Blog/BlogPost";

import * as blogService from "../../services/blogService";

export default function Profile() {
    const [posts, setPosts] = useState([]);
    const { userId } = useParams();


    useEffect(() => {
        blogService.getAllByUserId()
        .then(result =>{
            result.map((post) => {
                let data = Object.values(post);
                if(data[0].userId === userId){
                    setPosts((state) => [...state, post]);
                }
            })         
        })
    }, []);


    return(
        <>
      <div className="page-nav">
        <div className="container">
          <div className="row">
            {/* <h2 className="text-start">{user}</h2> */}
            <h1>My posts:</h1>
          </div>
        </div>
      </div>

      <div id="blog-page" className="blog-page">
        <div className="container-page">
          <div className="row-blog">
            {posts.map((post) => {
    
                let keys = Object.keys(post).join('');
                let data = Object.values(post);
                // console.log(data[0].creator);

            
                return <BlogPost key={keys} id={keys} {...data[0]} />
            })}
          </div>
        </div>
      </div>


        </>
    );

}