import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Login({ setCurrentUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()



// Logout fetch
//   function handleLogout() {
//     fetch("/logout", {
//         method: "DELETE"
//     })
//     .then(resp => {
//         if (resp.ok) {
//             setCurrentUser(null)
//             // window.history.push(null, "", "/")
//         }
//     })
// }

  function onSignupSubmit(e) {
    e.preventDefault()
    setErrors([])
    const user = { username, password }

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => setCurrentUser(user))
    .catch(err => setErrors(err))
  }

  function onLoginSubmit(e) {
    console.log("logging in..")
    e.preventDefault()
    setErrors([])
    const user = { username, password }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/my-recipes')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
    }

  return (
    <div>
    <div>
      <form onSubmit={onSignupSubmit}>
      <label>Username: </label>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label>Password: </label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='submit' value='signup'>Signup</button>
        {errors}
      </form>
    </div>

      <div>
      <form onSubmit={onLoginSubmit}>
      <label>Username: </label>
        <input type='text' value={userLog} onChange={(e) => setUserLog(e.target.value)}></input>
      <label>Password: </label>
        <input type='password' value={passLog} onChange={(e) => setPassLog(e.target.value)}></input>
        <button type='submit' value='login'>Login</button>
        {errors}
      </form>
    </div>

    </div>
  )
}

export default Login
