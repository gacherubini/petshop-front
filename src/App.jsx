import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { UserContextProvider } from "../context/userContext";
import {Toaster} from "react-hot-toast"

import React from 'react'


import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Carrinho from './components/Carrinho';
import Login from './components/Login';

import './app.css'

import Register from './components/Register';
import DashBoard from './components/Dashboard';
import DashboardAdmin from './components/DashboardAdmin';


function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <header>
        <Header/>
    </header>
    <main> 
    <Toaster position="top-right" toastOptions={{duration:20000}}/>
    <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/carrinho" element = {<Carrinho/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/register" element = {<Register/>} />
                <Route path="/dashboard" element = {<DashBoard/>} />
                <Route path="/adm" element = {<DashboardAdmin/>} />
    </Routes>
    </main>
    <footer> 
      <Footer/> 
    </footer>
  </BrowserRouter>
  </UserContextProvider>
  )
}

export default App
