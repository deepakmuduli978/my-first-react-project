import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header';
import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';
import Contact from './menubar/Contact'
import About from './menubar/About'
import { Home } from './menubar/Home'
import Service from './menubar/Service'


function App() {


  return (
    <div>
      <h1>This is my first react project</h1>
      <Header/>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>

        </Routes>
      </BrowserRouter>
      
      
      <Body/>
      <Footer/>

    </div>
  )
}

export default App
