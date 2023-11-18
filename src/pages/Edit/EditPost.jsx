import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as blogService from "../../services/blogService";

export default function EditPost() {

    return(
        <div className="edit-post">
        <form id="edit" onSubmit={handleSubmit}>
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