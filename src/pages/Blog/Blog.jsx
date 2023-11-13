import { Link } from "react-router-dom";

export default function Blog() {

    return (
        <>
           <div className="page-nav">
        <div className="container">
            <div className="row">
                <h2 className="text-start">Our Blogs</h2>
                <ul>
                    <li> <Link to='/'><i className="bi bi-house-door"></i> Add Blog post</Link></li>
                    {/* <li> <i className="bi bi-chevron-double-right pe-2"></i> Blogs</li> */}
                </ul>
            </div>
        </div>
    </div>

   <div id="blog-page" className="blog-page">
        <div className="container-page">
            <div className="row-blog">
    <Link to={'/blog-details'} className="blog-banner">      
                <div className="col-lg-4 col-md-6 mb-4">
                   <div className="serv-cove rounded bg-white p-2">
                        <img src="/src/assets/images/blog/b1.jpg" alt=""/>
                        <div className="p-2">
                            <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                            <span className="fs-8">22 May 2015</span>
                            <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                        </div>
                   </div>
                </div>
                </Link>
                <div className="col-lg-4 col-md-6 mb-4">
                   <div className="serv-cove rounded bg-white p-2">
                        <img src="/src/assets/images/blog/b2.jpg" alt=""/>
                        <div className="p-2">
                            <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                            <span className="fs-8">22 May 2015</span>
                            <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                        </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                   <div className="serv-cove rounded bg-white p-2">
                        <img src="/src/assets/images/blog/b4.jpg" alt=""/>
                        <div className="p-2">
                            <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                            <span className="fs-8">22 May 2015</span>
                            <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                        </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                   <div className="serv-cove rounded bg-white p-2">
                        <img src="/src/assets/images/blog/b3.jpg" alt=""/>
                        <div className="p-2">
                            <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                            <span className="fs-8">22 May 2015</span>
                            <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                        </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                   <div className="serv-cove rounded bg-white p-2">
                        <img src="/src/assets/images/blog/b1.jpg" alt=""/>
                        <div className="p-2">
                            <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                            <span className="fs-8">22 May 2015</span>
                            <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                        </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                   <div className="serv-cove rounded bg-white p-2">
                        <img src="/src/assets/images/blog/b2.jpg" alt=""/>
                        <div className="p-2">
                            <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in  Webdesign sit nibh amet  Mauris ipsum sit nibh</h5>
                            <span className="fs-8">22 May 2015</span>
                            <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}