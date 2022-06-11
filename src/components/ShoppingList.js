import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchInput(event.target.value);
  }

  // const searchItemsToDisplay = items.filter((item) => {
  //   if (searchInput === "") return true;

  //   return item.name === searchInput;
  // });

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchInput === "") return true;

    return item.category === selectedCategory || item.name.toLowerCase().includes(searchInput.toLowerCase())
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={searchInput} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
