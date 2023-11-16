import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as blogService from "../../services/blogService";

const formInitialState = {
  title: "",
  imageUrl: "",
  description: "",
  date: "",
  creator: "",
};

export default function CreatePost() {
  const [formValues, setFormValues] = useState(formInitialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    formValues.date = new Date().toLocaleDateString();

    //Must be changed with user id
    formValues.creator = "user";

    blogService.create(formValues);

    navigate("/blog");
  };

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
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
          />
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

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
