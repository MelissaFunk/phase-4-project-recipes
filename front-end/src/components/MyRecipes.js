import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'

function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([])

  useEffect(() => {
    fetch("/favorites")
      .then(res => res.json())
      .then(setMyRecipes)  
  }, [])

  const eachRecipe = myRecipes.map(recipe => 
    <RecipeCard 
      recipe={recipe.recipe}
      key={recipe.recipe.id}
    />
  )

  return (
    <div>
      <h1>My Recipes</h1>
      {eachRecipe}
    </div>
  )
  }
  
  export default MyRecipes