import { useState, useEffect } from 'react' 
import { useParams } from 'react-router'

function RecipeDetails({ user }) {
  const [recipe, setRecipe] = useState([])
  const [recipeCommentsArr, setRecipeCommentsArr] = useState([])
  const [recipeIngredientsArr, setRecipeIngredientsArr] = useState([])
  const [recipeDirectionsArr, setRecipeDirectionsArr] = useState([])
  const [comments, setComments] = useState([])
  const [reviews, setReviews] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => {
      setRecipe(recipe)
      setRecipeCommentsArr(recipe.all_comments)
      setRecipeIngredientsArr(recipe.all_ingredients)
      setRecipeDirectionsArr(recipe.all_directions)
    }
      )  
  }, [id])

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/comments', {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        comment: e.target.comment.value,
        recipe_id: recipe.id, 
        user_id: user.id 
      })
    })
    .then(res => res.json())
    .then(handleAddComment)
    e.target.reset()
  }

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview])
  }

  const handleSaveRecipe = () => {
    const review = { 
      user_id: user.id, 
      recipe_id: recipe.id,
      favorite: true,
      rating: 4
     }

    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(handleAddReview)
  }

  return (
    <div>
      <h1>{recipe.title} {"⭐".repeat(recipe.avg_rating)} </h1>
      <img className="details-image" src={recipe.image} alt="recipe"/>
      <p className="details-cuisine">Cuisine: {recipe.cuisine}</p>
      <p>Ingredients: {recipeIngredientsArr.map(ing => {
        return <li key={ing.id}>{ing}</li>
      })}</p> 
      <p>Directions: {recipeDirectionsArr.map(dir => {
        return <li key={dir.id}>{dir}</li>
      })}</p>
      {user ? 
      <button onClick={handleSaveRecipe}>Save This Recipe</button>
      : null }
      <p>Comments: {recipeCommentsArr.map(com => {
          return <li key={com.id}>{com}</li>
      })}</p>
      {user ? 
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add a Comment: </label>
          <input type="text" name="comment" placeholder="Comment..." />
          <button>Add Comment</button>
        </form>
      </div>
      : null}
    </div>
  )
}
  
  export default RecipeDetails