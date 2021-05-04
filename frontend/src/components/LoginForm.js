import React, {useState} from 'react'

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const submitHandler = e => {
    e.preventDefault()

   
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        
        
       
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="form-group"> 
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="LOGIN"/>
      </div>
    </form>
  )
}

export default LoginForm
