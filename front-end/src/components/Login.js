import { useState } from 'react'

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    const user = { username, password }

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(setCurrentUser)
    e.target.reset()   
  }

  return (
    <div>
      <form onSubmit={onSubmit}/>
      <label>Username: </label>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label>Password: </label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type='submit' value='signup'></input>
        <input type='submit' value={login} onClick={() => setLogin(true)}></input>
    </div>
  )
}

export default Login
