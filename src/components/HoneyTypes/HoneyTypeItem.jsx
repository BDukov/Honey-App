/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export default function HoneyTypeItem({ id, title, description, imageUrl }) {
  return (
    <>
      <div className="col">
        <div className="product-bg-white">
          <img src={imageUrl} alt="" />
          <div className="d-inline-block">
            <h4 className="honey-type-1">{title}</h4>
          </div>
          <div className="d-inline-block mt-3">
            <Link to={`honey-types/${id}`}>
              <button className="btn-honey-details">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
