import { useState, useEffect } from 'react' 

function RecipeDetails() {
  const [recipe, setRecipe] = useState([])
  const [comments, setComments] = useState([])

    useEffect(() => {
    fetch(`/recipes/${recipe.id}`)
      .then(res => res.json())
      .then(setRecipe)  
  }, [])

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
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt="recipe"/>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Rating: {recipe.avg_rating}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <p>Comments: </p>
        {/* {recipe.comments.map(c =>
          <li>{c.comment}</li>
        )} */}

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