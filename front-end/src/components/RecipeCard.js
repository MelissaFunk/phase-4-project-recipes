import { Link } from 'react-router-dom'

function RecipeCard({ recipe, setCurrentRecipe }) { 

  const showDetails = () => {
    setCurrentRecipe(recipe)
  }

  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt="recipe"/>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Rating: {recipe.avg_rating}</p>
      <button onClick={showDetails}><Link to="/discover/details">See Recipe</ Link></button>
    </div>
  )
  }
  
  export default RecipeCard