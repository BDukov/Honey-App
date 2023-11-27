/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export default function HoneyTypeItem({ id, title, description, imageUrl }) {
  return (
    <>
                <div className="col-lg-3">
                        <div className="product bg-white p-4 text-center shadow-md">
                            <img src={imageUrl} alt=""/>
                             <div className="d-inline-block">
                                <h4 className="fw-bolder fs-5 mt-4">{title}</h4>
                            </div>
                            <div className="details-buttons">
                            <Link to={`/honey-types/${id}`}> <button className="details-btn">Details</button></Link>
                            </div>
                        </div>
                </div>
    </>
  );
}
