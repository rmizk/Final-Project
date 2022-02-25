import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import { loginUser } from '../../redux/actions';
import "./SignIn.css"


const SignIn = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const {loading,users} = useSelector(state=>state.reducer)

  // console.log(users)

  const dispatch = useDispatch()


  const handleSubmit = (e)=> {
    e.preventDefault();
    const newUser = {
      email,
      password
    }

    dispatch(loginUser(newUser))
  }


  return (
    <div className='background'>

        {
          loading ? <h1> </h1>
          : localStorage.getItem('token') ? <Redirect to= "/profile" ></Redirect> 
          :
          <>
              <div className="signup-box">

              <h2>Se connecter</h2>

              <form action="">

              <label htmlFor="">Email</label>
              <input type="email" placeholder="" value={email} onChange={(e)=>setemail(e.target.value)}/>

              <label htmlFor="">Mot de passe</label>
              <input type="password" placeholder="" value={password} onChange={(e)=>setpassword(e.target.value)}/>

              <input type="button" value="Se connecter" onClick={handleSubmit}  />

              </form> 

    </div>
          
          </>
        }
        
    </div>
  )
}

export default SignIn