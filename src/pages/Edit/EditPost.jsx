import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import * as blogService from "../../services/blogService";

import "./EditPost.css";

const initialFormState = {
  title: "",
  imageUrl: "",
  description: "",
  date: "",
  creator: "",
};

export default function EditPost() {
  const [post, setPost] = useState({});
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const { postId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  console.log(formValues);

  useEffect(() => {
    blogService.getOne(postId).then(setPost);
  }, [postId]);

  useEffect(() => {
    setFormValues({
      title: post.title,
      imageUrl: post.imageUrl,
      description: post.description,
      date: post.date,
      creator: post.creator,
    });
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    formValues.date = new Date().toLocaleDateString();

    //Must be changed with user id or email
    formValues.creator = user.email;
    formValues.userId = user.uid;

    await blogService.update(postId, formValues);

    navigate(`/blog/${postId}`);
  };

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    switch (e.target.name) {
      case "title":
        validateTitle();
        break;
      case "imageUrl":
        validateImageUrl();
        break;
      case "description":
        validateDescription();
        break;
      default:
        break;
    }
  };
  const validateTitle = () => {
    const errors = {};
    if (formValues.title.length < 3) {
      errors.title = "Title must be at least 3 symbols";
    }
    setFormErrors(errors);
    return errors;
  };

  const validateImageUrl = () => {
    const errors = {};
    if (formValues.imageUrl.length < 10) {
      errors.imageUrl = "Image url must be at least 10 symbols";
    }
    setFormErrors(errors);
    return errors;
  };

  const validateDescription = () => {
    const errors = {};
    if (formValues.description.length < 20) {
      errors.description = "Description must be at least 20 symbols";
    }
    setFormErrors(errors);
    return errors;
  };

  return (
    <div className="edit-post">
      <form id="edit" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Edit Blog-Post</h1>
          <label>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={changeHandler}
            placeholder="Enter title..."
          />
          {formErrors.title && (
            <span className="error">{formErrors.title}</span>
          )}
          <br />

          <label>Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formValues.imageUrl}
            onChange={changeHandler}
            placeholder="Enter image url..."
          />
          {formErrors.imageUrl && (
            <span className="error">{formErrors.imageUrl}</span>
          )}
          <br />

          <label>Description:</label>
          <input
            className="description"
            name="description"
            id="description"
            value={formValues.description}
            onChange={changeHandler}
            placeholder="Enter description here..."
          />
          {/* <input name="description" value={formValues.description} onChange={changeHandler} /> */}
          {formErrors.description && (
            <span className="error">{formErrors.description}</span>
          )}

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
