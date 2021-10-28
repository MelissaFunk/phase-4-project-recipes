import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) { 

  return (
    <div>
      <h3>{recipe.title} {"⭐".repeat(recipe.avg_rating)}</h3>
      <img src={recipe.image} alt="recipe"/>
      <p>Cuisine: {recipe.cuisine}</p>
      <Link to={`/discover/${recipe.id}`}><button>See Recipe</button></ Link>
    </div>
  )
  }
  
  export default RecipeCard