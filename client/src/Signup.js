import React, { useState } from 'react'
import Axios from 'axios'
import './styles/App.css'

function Signup() {

  //initialize inputs
  const [input, setInput] = useState({
    username: '', 
    email: '',
    password: '' 
  });

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '' 
  });


  const [inputErrors, setInputErrors] = useState({});
  //const [isSubmit, setIsSubmit] = useState(false);


  //Register User
  const register = () => {
    Axios.post('http://localhost:5000/register', {
      username: input.username,
      email: input.email,
      password: input.password
    }).then((response) => {
      console.log(response);
    });
  };

  //Login User
  const loginUser = () => {
    Axios.get('http://localhost:5000/login', {
      username: loginDetails.username,
      password: loginDetails.password
    }).then((response) => {
      console.log(response);
    });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const details = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });

    //console.log(loginDetails)
  }

  const submitHandler = (submit) => {
    submit.preventDefault();

    setInputErrors(validateInput(input));
    console.log(input);
  }

  const validateInput = (value) => {
    const errors = {};


    if (value.username.length < 4) {
      errors.username = "Username must be more than 4 characters!";
    } else if (value.username.length > 10) {
        errors.username = "Username can't exceed 10 characters";
    }
    if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password can't exceed 10 characters";
    }
    return errors;
  }

  return (
    
    <div className="container">
        
      {/* SIGNUP */}
      <form onSubmit={submitHandler}>

        <div className="form signup">

        <h1>Sign up</h1>

          <div className="input-field">
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' value={input.username} onChange={changeHandler} required/>
          </div>
          <p>{inputErrors.username}</p>

          <div className="input-field">
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' value={input.email} onChange={changeHandler} required/>
          </div>
          <p>{inputErrors.email}</p>

          <div className="input-field">
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' value={input.password} onChange={changeHandler} required/>
          </div>
          <p>{inputErrors.password}</p>
          
          <button onClick={register}>Submit</button>
        </div>
      </form>


      {/* LOGIN */}
      <form>

        <div className="form login">

        <h1>Login</h1>

          <div className="input-field">
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' value={loginDetails.username} onChange={details} autoComplete='off' required/>
          </div>
          <p>{inputErrors.username}</p>

          <div className="input-field">
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' value={loginDetails.password} onChange={details} autoComplete='off' required/>
          </div>
          <p>{inputErrors.password}</p>
          
          <button onClick={loginUser}>Login</button>
        </div>
      </form> 
    </div>
  );
}

export default Signup;
