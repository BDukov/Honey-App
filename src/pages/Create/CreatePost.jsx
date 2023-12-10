import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as blogService from "../../services/blogService";

import { useAuthContext } from "../../hooks/useAuthContext";

import "./CreatePost.css";

const formInitialState = {
  title: "",
  imageUrl: "",
  description: "",
  date: "",
  creator: "",
  userId: "",
};

export default function CreatePost() {
  const [formValues, setFormValues] = useState(formInitialState);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const { user } = useAuthContext();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateTitle();
    validateImageUrl();
    validateDescription();

    if (Object.keys(formErrors).length === 0) {
      formValues.date = new Date().toLocaleDateString();
      formValues.creator = user.email;
      formValues.userId = user.uid;

      await blogService.create(formValues);
      navigate("/blog");
    }
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

  //   const resetFormHandler = () => {
  //     setFormValues(formInitialState);
  //   };

  //   const submitHandler = () => {
  //     resetFormHandler();
  //   };

  return (
    <div className="create-post">
      <form id="create" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Create Blog-Post</h1>
          <label>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={changeHandler}
            placeholder="Enter title..."
            required
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
            required
          />
          {formErrors.imageUrl && (
            <span className="error">{formErrors.imageUrl}</span>
          )}
          <br />

          <label>Description:</label>
          <textarea
            className="description"
            name="description"
            id="description"
            value={formValues.description}
            onChange={changeHandler}
            placeholder="Enter description here..."
            required
          />
          {formErrors.description && (
            <span className="error">{formErrors.description}</span>
          )}
          {/* <input name="description" value={formValues.description} onChange={changeHandler} /> */}

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
