import { useState, useEffect } from 'react' 
import { useParams } from 'react-router'

function RecipeDetails() {
  const [recipe, setRecipe] = useState([])
  const [recipeCommentsArr, setRecipeCommentsArr] = useState([])
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => {
      setRecipe(recipe)
      setRecipeCommentsArr(recipe.all_comments)
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
        user_id: 1 // will need to add user_id
      })
    })
    .then(res => res.json())
    .then(handleAddComment)
    e.target.reset()
  }


  return (
    <div>
      <h3>{recipe.title} {"⭐".repeat(recipe.avg_rating)}</h3>
      <img src={recipe.image} alt="recipe"/>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
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