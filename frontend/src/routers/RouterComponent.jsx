import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomeComponent from '../components/pages/HomeComponent';
import LoginComponent from '../components/auth/LoginComponent';
import RegisterComponent from '../components/auth/RegisterComponent';
import AdminMiddleware from '../components/middleware/AdminMiddleware';
import DashboardComponent from '../components/admin/DashboardComponent';
import UserListComponent from '../components/admin/UserListComponent';
import ManageCategory from '../components/admin/ManageCategory';
import AddNewsComponent from '../components/admin/AddNewsComponent';
import ShowNewsComponent from '../components/admin/ShowNewsComponent';


function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            
            <Route path="/admin" element={<AdminMiddleware />} >
                <Route path="/admin" element={<DashboardComponent />} />
                <Route path="users" element={<UserListComponent />} />
                <Route path="manage-category" element={<ManageCategory />} />
                <Route path="add-news" element={<AddNewsComponent />} />
                <Route path="show-news" element={<ShowNewsComponent />} />
            </Route>


        </Routes>
      
    </div>
  )
}

export default RouterComponent
