import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function User() {
    const [users, setUsers] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        console.log(result.data);
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
                await axios.delete(`http://localhost:8080/user/${id}`);
                loadUsers();
              swal("User deleted successfully!", {
                icon: "success",
              });
            } else {
              swal("Your data is safe!");
            }
          });
        
    }

  return (
    <div>
    <Navbar/>
    <div className="container" >
        <div className="" style={{paddingTop: '12rem', paddingBottom: '10rem'}}>
            <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">All Users</h1>
            <div style={{paddingLeft: '20rem'}} >
            <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon" style={{paddingRight: '1rem'}} >
                        <i className="fas fa-star" ></i>
                    </div>
                    <div className="divider-custom-line"></div>
                    <div style={{paddingLeft: '11.5rem'}} ></div>
                    <Link className='btn mx-2 shadow' to="/addUser" style={{backgroundColor: '#2c3e50', color:'white', fontSize:'1.5rem'}}>Add User</Link>
                </div></div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row" key={index}>
                                    {index+1}
                                </th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/viewUser/${user.id}`}>View</Link>
                                    <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

            
                </tbody>
            </table>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

