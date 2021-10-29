import { useState, useEffect } from 'react' 
import { useParams } from 'react-router'

function RecipeDetails() {
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
        user_id: 1 // will need to update this id
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
      user_id: 1, // need to update this id
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
      <h3>{recipe.title} {"⭐".repeat(recipe.avg_rating)} </h3>
      <img src={recipe.image} alt="recipe"/>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Ingredients: {recipeIngredientsArr.map(ing => {
        return <li>{ing}</li>
      })}</p> 
      <p>Directions: {recipeDirectionsArr.map(dir => {
        return <li>{dir}</li>
      })}</p>
      <button onClick={handleSaveRecipe}>Save This Recipe</button>
      <p>Comments: {recipeCommentsArr.map(com => {
          return <li>{com}</li>
      })}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add a Comment: </label>
          <input type="text" name="comment" placeholder="Comment..." />
          <button>Add Comment</button>
        </form>
      </div>
    </div>
  )
}
  
  export default RecipeDetails