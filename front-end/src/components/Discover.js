import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'

function Discover({ setCurrentRecipe }) { 
  const [recipes, setRecipes] = useState([])
  const [filterBy, setFilterBy] = useState("All")

  useEffect(() => {
    fetch("/recipes")
    .then(res => res.json())
    .then(setRecipes)
  }, [])


  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  const recipesToDisplay = recipes.filter(recipe => {
    if (filterBy === "All") {
      return true
    } else {
      return recipe.cuisine === filterBy
    }
  })

  const eachRecipe = recipesToDisplay.map(recipe => 
    <RecipeCard 
      setCurrentRecipe={setCurrentRecipe}
      recipe={recipe}
      key={recipe.id}
    />
  )

  return (
    <div>
      <h1>Discover</h1>
      <label>Search by Cuisine: </label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
        <option value="Thai">Thai</option>
        <option value="American">American</option>
      </select>
      {eachRecipe}
    </div>
  )
}
  
  export default Discover

