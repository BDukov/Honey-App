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
    const navigate = useNavigate();
  

  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      formValues.date = new Date().toLocaleDateString();
  

  
      honeyTypeService.create(formValues);
  
      navigate("/honey-types");
    };
  
    const changeHandler = (e) => {
      setFormValues((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    };
    return(
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

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
        </>
    );
}