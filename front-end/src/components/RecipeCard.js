import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) { 

  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt="recipe"/>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Rating: {recipe.avg_rating}</p>
      <Link to={`/discover/${recipe.id}`}><button>See Recipe</button></ Link>
    </div>
  )
  }
  
  export default RecipeCard