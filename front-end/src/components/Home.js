import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home({ setRecipes, recipes }) {

  useEffect(() => {
    fetch("/recipes/top5")
      .then(res => res.json())
      .then(setRecipes)  
  }, [])

  const eachRecipe = recipes.map(recipe =>
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} />
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Rating: {recipe.avg_rating}</p>
      <Link to="/discover/details"><button>See Recipe</button></Link>
    </div>
    )

  return (
    <div>
      <h1>Check out the top 5 recipes!</h1>
      {eachRecipe}
    </div>
  )
  }
  
  export default Home