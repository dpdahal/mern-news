import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function RegisterComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const getImage =(e)=>{
    setImage(e.target.files[0]);
  }

  const loginPage = async (e) => {
    e.preventDefault();
    if (email === '') {
      setEmailError('Email is required');
      return
    }
    if (password === '') {
      setPasswordError('Password is required');
      return false;
    }

    setEmailError('');
    setPasswordError('');
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('gender',gender);
    data.append('image',image);
    axios.post('http://localhost:8000/users', data).then((res) => {
      if(res.data.success){
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
        });
        setName('');
        window.location.href = '/login';

      }else{

      }
    }).catch((error) => {
      console.log(error);
      setEmailError(error.response.data.email);
      setPasswordError(error.response.data.password);
    })


  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1>Register Page</h1>
          <form action="" onSubmit={loginPage}>
            <div className="form-group mb-2">
              <label htmlFor="name">Name: </label>
              <input type="text"
                onChange={(e) => setName(e.target.value)}
                className='form-control' id='name'
                value={name}
                required
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="email">Email:
                <span className='text-danger'>{emailError}</span>
              </label>
              <input type="text"
                onChange={(e) => setEmail(e.target.value)}
                className='form-control' id='email' />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password">Password:
                <span className='text-danger'>{passwordError}</span>
              </label>
              <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                className='form-control' id='password' />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="gender">Gender</label>
              <select name="gender"
                onChange={(e) => setGender(e.target.value)}
               id="gender" className='form-control'>
                <option value="">---Select Gender---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="image">Image</label>
              <input type="file"
                onChange={getImage}
                id="image"
               className='form-control' />
              
            </div>
            <div className="form-group mb-2">
              <button className='btn btn-success w-100'>Register</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default RegisterComponent
