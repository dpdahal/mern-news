import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ManageCategory() {
  const [name,setName] = useState('');
  const [slug,setSlug] = useState('');
  const [nameError,setNameError] = useState('');
  const [slugError,setSlugError] = useState('');

  const [category,setCategory] = useState([]);

  const getData =()=>{
    axios.get('http://localhost:8000/category').then((res)=>{
      setCategory(res.data.category);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getData();
  },[]);



  const addCategory=async(e)=>{
    e.preventDefault();
    if(name === ''){
      setNameError('Name is required');
      return
    }
    if(slug === ''){
      setSlugError('Slug is required');
      returnfalse;
    }
    
  
    let data={name,slug}
    axios.post('http://localhost:8000/category',data).then((res)=>{
      console.log(res.data);
      getData();
      setName('');
      setSlug('');
    }).catch((error)=>{
      console.log(error);
    
    })
    
   
  }

  return (
    <div className='container'>
      <div className="row">
      <div className="col-md-12">
        <div className="card">
            <div className="card-body">
                <h1>Manage Category</h1>
                <form action="" onSubmit={addCategory}>
                  <div className="form-group mb-2">
                    <label htmlFor="name">Name: 
                      <span className='text-danger'>{nameError}</span>
                    </label>
                    <input type="text"
                    onChange={(e)=>setName(e.target.value)}
                    className='form-control' id='name'
                    value={name}
                     />                    
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="slug">slug: 
                      <span className='text-danger'>{slugError}</span>
                    </label>
                    <input type="text"
                    onChange={(e)=>setSlug(e.target.value)}
                    className='form-control' id='slug'
                    value={slug}
                     />                    
                  </div>
                  <div className="form-group mb-2">
                    <button className='btn btn-success w-100'>Add Category</button>            
                  </div>
                </form>
                <br /> <br />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>Name</th>
                            <th>Slug</th>        
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          category &&  category.map((cat,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{cat.name}</td>
                                        <td>{cat.slug}</td>                                    
                                    
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                          <Link to="#" className='btn btn-success'>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default ManageCategory

