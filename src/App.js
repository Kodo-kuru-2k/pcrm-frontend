import React from "react";
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UserPage from './pages/UserPage';
import COEPage from './pages/COEPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}/>
        <Route path = "/coe" element = {<COEPage/>}/>
        <Route path = "/forgot" element = {<ForgotPasswordPage/>}/>
        <Route path = "/usrlog" element = {<UserPage/>}/>
        <Route path = "/adminlog" element = {<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
