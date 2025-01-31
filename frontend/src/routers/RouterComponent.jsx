import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomeComponent from '../components/pages/HomeComponent';
import LoginComponent from '../components/auth/LoginComponent';
import RegisterComponent from '../components/auth/RegisterComponent';
import AdminMiddleware from '../components/middleware/AdminMiddleware';
import DashboardComponent from '../components/admin/DashboardComponent';


function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            
            <Route path="/admin" element={<AdminMiddleware />} >
                <Route path="/admin" element={<DashboardComponent />} />
            </Route>


        </Routes>
      
    </div>
  )
}

export default RouterComponent
