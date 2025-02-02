import React,{useState} from 'react';
import axios from 'axios';

function LoginComponent() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');

  const loginPage=async(e)=>{
    e.preventDefault();
    if(email === ''){
      setEmailError('Email is required');
      return
    }
    if(password === ''){
      setPasswordError('Password is required');
      return false;
    }
    
    setEmailError('');
    setPasswordError('');
    let data={email,password}
    axios.post('http://localhost:8000/login',data).then((res)=>{
      let token = res.data.token;
      localStorage.setItem('token',token);
      window.location.href='/admin';
    }).catch((error)=>{
      console.log(error);
      setEmailError(error.response.data.email);
      setPasswordError(error.response.data.password);
    })
    
   
  }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 mt-5">
                <h1>Login Page</h1>
                <form action="" onSubmit={loginPage}>
                  <div className="form-group mb-2">
                    <label htmlFor="email">Email: 
                      <span className='text-danger'>{emailError}</span>
                    </label>
                    <input type="text"
                    onChange={(e)=>setEmail(e.target.value)}
                    className='form-control' id='email' />                    
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password: 
                      <span className='text-danger'>{passwordError}</span>
                    </label>
                    <input type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className='form-control' id='password' />                    
                  </div>
                  <div className="form-group mb-2">
                    <button className='btn btn-success w-100'>Login</button>            
                  </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default LoginComponent
