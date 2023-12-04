import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


import * as honeyTypeService from "../../services/honeyTypeService";


 const initialFormState = {
  title: "",
  imageUrl: "",
  description: "",

};

export default function EditHoneyType() {

    const [typeOfHoney, setTypeOfHoney] = useState({});
    const [formValues, setFormValues] = useState(initialFormState);
    const { postId } = useParams();
    const navigate = useNavigate();

 
    useEffect(() => {
       honeyTypeService.getOne(postId)
      .then(setTypeOfHoney)
    }, [postId]);
  
    useEffect(() => {
     setFormValues({
        title: typeOfHoney.title,
        imageUrl: typeOfHoney.imageUrl,
        description: typeOfHoney.description,
      })

    }, [typeOfHoney]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      formValues.date = new Date().toLocaleDateString();
  
     await honeyTypeService.update(postId, formValues);
  
      navigate(`/honey-types/${postId}`);
    };
  
    const changeHandler = (e) => {
      setFormValues((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    }
    return(
        <>
                   <div className="create-post">
      <form id="create" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Edit Honey Type</h1>
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

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
        </>
    );
}