import { Link } from 'react-router-dom'

function NavBar() {

return (
  <div>
    <Link to="/"><button>Home</button></Link>
    <Link to="/discover"><button>Discover</button></Link>
    <Link to="/my-recipes"><button>My Recipes</button></Link>
    <Link to="/login"><button>Login/Signup</button></Link>
  </div>
)
}

export default NavBar