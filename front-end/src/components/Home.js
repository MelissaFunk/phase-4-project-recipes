import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'

function Home() {
  const [top5, setTop5] = useState([])

  useEffect(() => {
    fetch("/recipes/top5")
      .then(res => res.json())
      .then(setTop5)  
  }, [])

  const eachRecipe = top5.map(recipe => 
    <RecipeCard 
      recipe={recipe}
      key={recipe.id}
    />
  )

  return (
    <div>
      <h1>Check out the top 5 recipes!</h1>
      {eachRecipe}
    </div>
  )
  }
  
  export default Home