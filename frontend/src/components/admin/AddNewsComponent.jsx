import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

function AddNewsComponent() {
  const [categoryId, setCategoryId] = useState("")
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [slugError, setSlugError] = useState("")


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


  const addNews = (e) => {
    e.preventDefault();
    const sendData = new FormData();
    sendData.append("categoryId", categoryId);
    sendData.append("title", title);
    sendData.append("slug", slug);
    sendData.append("description", description);
    sendData.append("image", image);
    sendData.append("userToken", localStorage.getItem("token"));

    axios.post('http://localhost:8000/news', sendData).then((res) => {
      console.log(res.data)
          if(res.data.success){
            Swal.fire({
              position: "center",
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500
            });
    
          }else{
    
          }
        }).catch((error) => {
          console.log(error);
          setSlugError(error.response.data.slug);
        })

  }

  return (
    <div className='container'>
      <div className="row card">
        <div className="card-body py-4">
          <div className="col-md-12">
            <h1>Add News</h1>
          </div>
          <div className="col-md-12">
            <form action="" onSubmit={addNews}>
              <div className="form-group mb-2">
                <label htmlFor="categoryId">Category</label>
                <select name="" id="" className='form-control'
                onChange={(e)=>setCategoryId(e.target.value)}
                 required>
                  <option value="">---Select Category ---</option>
                  {category && category.map((item,index)=>(
                    <option key={index} value={item._id}>{item.name}</option>
                  ))}

                </select>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className='form-control' placeholder='Enter Title'
                onChange={(e)=>setTitle(e.target.value)} required/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="slug">Slug</label>
                <input type="text" className='form-control' placeholder='Enter Slug'
                onChange={(e)=>setSlug(e.target.value)} required/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <textarea className='form-control' placeholder='Enter Description'
                onChange={(e)=>setDescription(e.target.value)} required></textarea>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="image">Image</label>
                <input type="file" className='form-control' placeholder='Enter Image'
                onChange={(e)=>setImage(e.target.files[0])} />
              </div>

              <div className="form-group mb-2">
                <button className='btn btn-success w-100'>Add News</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewsComponent

