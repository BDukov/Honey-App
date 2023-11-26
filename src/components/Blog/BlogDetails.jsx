import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";

import * as blogService from "../../services/blogService";
import * as commentsService from "../../services/commentsService";

import "./BlogDetails.css";

const formInitialState = {
  username: "",
  comment: "",
};

export default function BlogDetails() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  const [formValues, setFormValues] = useState(formInitialState);

  const navigate = useNavigate();

  const { user } = useAuthContext();

  useEffect(() => {
    blogService.getOne(postId).then(setPost);

    commentsService.getAll(postId).then(setComments);
  }, [postId]);

  useEffect(() => {
    commentsService.getAll(postId).then(setComments);
  }, [comments]);

  useEffect(() => {
    blogService.getOne(postId).then(setPost);
  }, [post]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const newComment = await commentsService.create(
      postId,
      user.email,
      formValues.comment
    );

    setComments((state) => [...state, newComment]);

    setFormValues(formInitialState);
  };

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onDeleteHandler = () => {
    alert("Are you sure you want to delete this post?");
    blogService.deleteOne(postId).then(() => {
      navigate("/blog");
    });
  };

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
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li> {post.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="details-page">
        <div className="container">
          <div className="post-details">
            <div className="post-img">
              <img src={post.imageUrl} alt="" />
            </div>
            <div className="post-info">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="creator-info">
                <p>Created at: {post.date}</p>
                <p>By: {post.creator}</p>
              </div>
            </div>
          </div>
          {user && user.email === post.creator && (
          <div className="details-buttons">

              <button className="edit-btn">
                <Link className="userline-none" to={`/blog/${postId}/edit`}>
                  Edit
                </Link>
              </button>


              <button className="delete-btn" onClick={onDeleteHandler}>
                <Link className="userline-none" to="/blog">
                  Delete
                </Link>
              </button>

          </div>
          )}

        </div>
      </div>

      <div className="details-comments">
        <div className="container">
          <h2>Comments:</h2>
          <ul className="comment-ul">
            {comments.map(({ _id, username, text }) => (
              <li key={_id} className="comment">
                <div className="comment-text">
                  <p>
                    <strong>{username}:</strong>
                  </p>
                  <p className="empty-line"></p>
                  <p>
                    <i>{text}</i>
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {comments.length === 0 && <p className="no-comment">No comments.</p>}

         {user &&  <article className="create-comment">
        
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}>
              <br />
              <input
                name="comment"
                value={formValues.comment}
                onChange={changeHandler}
                placeholder="Comment......"
              ></input>{" "}
              <br />
              <input className="btn-submit" type="submit" value="Add Comment" />
            </form>
          </article>
}
        </div>
      </div>
    </>
  );
}
