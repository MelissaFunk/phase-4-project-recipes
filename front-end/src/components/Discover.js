// import RecipeCard from './components/RecipeCard' // Recipe#Index
import { Link } from 'react-router-dom'

function Discover() {

  return (
    <div>
      <h1>Discover</h1>
      {/* <RecipeCard /> */}
      <Link to="/discover/details"><button>Recipe Details</button></Link>
    </div>
  )
}
  
  export default Discover