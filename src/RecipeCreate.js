import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleInputChange}
                value={formData.name}
                placeholder="Name"
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleInputChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              ></input>
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                onChange={handleInputChange}
                value={formData.photo}
                placeholder="URL"
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={2}
                onChange={handleInputChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                width="100%"
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                rows={2}
                onChange={handleInputChange}
                value={formData.preparation}
                placeholder="Preparation"
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
