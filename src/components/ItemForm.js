import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newSubmitName, setNewSubmitName] = useState("");
  const [newSubmitCategory, setNewSubmitCategory] = useState("Produce");

  function handleNameChnage(event) {
    // console.log(event.target.value)
    setNewSubmitName(event.target.value);
  }

  function handleCategoryChnage(event) {
    // console.log(event.target.value)
    setNewSubmitCategory(event.target.value);
  }

  const newItem = {
    id: uuid(),
    //  the `uuid` library can be used to generate a unique id
    name: newSubmitName,
    category: newSubmitCategory,
  };

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChnage}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChnage}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
