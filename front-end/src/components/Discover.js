import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'

function Discover() { 
  const [recipes, setRecipes] = useState([])
  const [filterBy, setFilterBy] = useState("All")

  useEffect(() => {
    fetch("/recipes")
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        setRecipes(data)
      }
    })
    .catch(error => console.log(error))
  }, [])

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  function recipesToDisplay() {
    return recipes.filter(recipe => {
      if (filterBy === "All") {
        return true
      } else {
        return recipe.cuisine === filterBy
      }
    })
  }

  function eachRecipe() {
    return recipesToDisplay().map(recipe => 
    <RecipeCard 
      recipe={recipe}
      key={recipe.id}
    />
  )
  }

  return (
    <div>
      <h1>Discover</h1>
      <div className="filter-cuisine">
      <label>Search by Cuisine: </label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
        <option value="Thai">Thai</option>
        <option value="American">American</option>
      </select>
      </div>
      <div>
      {eachRecipe()}
      </div>
    </div>
  )
}
  
  export default Discover

