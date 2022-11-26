
import Navbar from './Component/Navbar/Navbar';
import {Routes, Route} from"react-router-dom"
import Home from './Component/Pages/Home';
import Footer from './Component/Footer/Footer'
import LiveScoreHome from './Component/Pages/LiveScoreHome';
import React from 'react';
import QeaT from './Component/Pages/QeaT';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route  exact path = "iosApp" element={<LiveScoreHome/>}/>
        <Route  exact path = "qeaTrophy" element={<QeaT/>}/>
      </Routes>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
