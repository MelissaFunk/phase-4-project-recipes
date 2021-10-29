import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Login({ setCurrentUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser(null)
            history.push("/")
        }
    })
}

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
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/my-recipes/:id')
          })
        } else {
          res.json().then(errors => {
            setErrors(errors)
          })
        }
      })
  }

  function onLoginSubmit(e) {
    console.log("logging in..")
    e.preventDefault()
    setErrors([])
    const user = { username: userLog, password: passLog }

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
            history.push('/my-recipes/:id')
          })
        } else {
          res.json().then(errors => {
            setErrors(errors)
          })
        }
      })
    }

  return (
    <div>
    <div className="form-container">
    <div className="form-content-left">
      <form className="form" onSubmit={onSignupSubmit}>
      <label className="form-label">Username: </label>
        <input className="form-inputs" type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label className="form-label">Password: </label>
        <input className="form-inputs" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button className="form-input-btn" type='submit' value='signup'>Signup</button>
        {errors}
      </form>
    </div>

      <div className="form-content-right">
      <form className="form" onSubmit={onLoginSubmit}>
      <label className="form-label">Username: </label>
        <input className="form-inputs" type='text' value={userLog} onChange={(e) => setUserLog(e.target.value)}></input>
      <label className="form-label">Password: </label>
        <input className="form-inputs" type='password' value={passLog} onChange={(e) => setPassLog(e.target.value)}></input>
        <button className="form-input-btn" type='submit' value='login'>Login</button>
        {errors}
      </form>
    </div>
    </div>
    <div>
      <button className="log-out-btn" onClick={handleLogout}>Logout</button>
    </div>
    </div>
  )
}

export default Login
