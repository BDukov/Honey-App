import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as honeyTypeService from "../../services/honeyTypeService";

const formInitialState = {
  title: "",
  imageUrl: "",
  description: "",
};

export default function AddHoneyType() {
  const [formValues, setFormValues] = useState(formInitialState);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    formValues.date = new Date().toLocaleDateString();

    await honeyTypeService.create(formValues);

    navigate("/honey-types");
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
    <>
      <div className="create-post">
        <form id="create" onSubmit={handleSubmit}>
          <div className="container">
            <h1>Add New Type Of Honey</h1>
            <label>Honey Type:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              onChange={changeHandler}
              placeholder="Enter honey type here..."
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
            <input
              className="description"
              name="description"
              id="description"
              value={formValues.description}
              onChange={changeHandler}
              placeholder="Enter description here..."
              required
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
    </>
  );
}
