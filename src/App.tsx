import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import Cards from "./components/cards/cards"
import Footer from "./footer/footer"
import AboutUs from './components/about/aboutus';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Cards/>
    <AboutUs/>
    <Footer/>
    </>
  );
}

export default App;
