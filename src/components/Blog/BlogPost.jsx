/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function BlogPost({
    id,
    creator,
    date,
    description,
    imageUrl,
    title
}) {
    return(
        <>
        <Link to={`/blog/${id}`}>
                   <div className="col-lg-4 col-md-6 mb-4" >
                    {/* <Link to={`/blog/${id}`}><i className="bi bi-arrow-right-circle"></i></Link> */}
              <div className="serv-cove rounded bg-white p-2">
                  <img src={imageUrl} alt=""/>
                    <div className="p-2">
                         <h5 className="blog-post-title">{title}</h5>
                         <span className="fs-8">{date}</span>
                         <span className="float-end fs-8"><i className="bi bi-person"></i>{creator}</span>
                  </div>
                 </div>
              </div>
        </Link>
        </>
    );
}