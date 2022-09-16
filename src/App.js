import React from 'react';
import './App.css';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/HeaderProfile/header';
import MainInfo from './components/MainInfo/mainInfo';


function App() {
  return (
    <>
    <Header />
    <MainInfo />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
