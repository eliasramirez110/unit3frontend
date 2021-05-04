import React, {useState} from 'react'
import axios from 'axios'

function SignupForm() {
  const [name, setName] = useState("") 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const submitHandler = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:3001/users/signup',{
      email: email,
      name: name,
      password: password
    })
    console.log(res)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
      
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="form-group"> 
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="SIGN UP"/>
      </div>
    </form>
  )
}

export default SignupForm