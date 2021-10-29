import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'

function MyRecipes({ user }) {
  const [myRecipes, setMyRecipes] = useState([])

  useEffect(() => {
    fetch(`/favorites/${user.id}`)
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
      <h1>{`Welcome ${user.username}!`}</h1>
      {eachRecipe}
    </div>
  )
  }
  
  export default MyRecipes