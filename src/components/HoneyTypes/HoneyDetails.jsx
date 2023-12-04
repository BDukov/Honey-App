import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

import * as honeyTypeService from "../../services/honeyTypeService";

import "./HoneyDetails.css";

export default function HoneyDetails() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    honeyTypeService.getOne(postId).then(setPost);
  }, [postId]);

  useEffect(() => {
    honeyTypeService.getOne(postId).then(setPost);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const onDeleteHandler = async () => {
    alert("Are you sure you want to delete this post?");
    await honeyTypeService.deleteOne(postId).then(() => {
      navigate("/honey-types");
    });
  }

  return (
    <>
      <div className="page-nav details">
        <div className="container">
          <div className="row">
            <h2 className="text-start">DETAILS</h2>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li> {post.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="details-page">
        <div className="container">
          <div className="honey-details">
            <div className="honey-img">
              <img src={post.imageUrl} alt="" />
            </div>
            <div className="honey-info">
              <h2 className="title">{post.title}</h2>
              <p className="description">{post.description}</p>
            </div>
            {user && user.email === "admin@abv.bg" &&
            <div className="details-buttons">
            <button className="edit-btn">
                <Link className="userline-none" to={`/honey-types/${postId}/edit`}>
                  Edit
                </Link>
              </button>


              <button className="delete-btn" onClick={onDeleteHandler}>
                <Link className="userline-none" to="/honey-types">
                  Delete
                </Link>
              </button>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
