import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserListComponent() {
    const [users,setUsers] = useState([]);

    const getUsers =  () => {
        axios.get('http://localhost:8000/users').then((res) => {
                setUsers(res.data.users);
        }).catch((error) => {
                console.log(error);
        });

    }

    const deleteData = (id) => {

    }

    useEffect(() => {
        getUsers();
    },[]);




    return (
        <div className='card'>
            <div className="card-header">
                <h5>User List</h5>
            </div>
            <div className="card-body">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Image</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          users &&  users.map((user,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <img src={user.image} width="40" alt={user.name} />
                                        </td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={()=>deleteData(user._id)} className='btn btn-danger'>Delete</button>
                                          <Link to="/admin/users/update/:id" className='btn btn-success'>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default UserListComponent
