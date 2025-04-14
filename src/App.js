
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './Mycomponents/Header';
//import About from './Mycomponents/About';

import Home from './Mycomponents/Home';
import Contact from './Mycomponents/Contact';
import MenuBar from './Mycomponents/MenuBar';
//import Scrolling from './Mycomponents/Scrolling';
//import Introduction from './Mycomponents/Introduction';
//import courses from './Mycomponents/courses';

import TrainingServices from './Mycomponents/TrainingServices';
import AboutUs from './Mycomponents/AboutUs';
//import Header from './Mycomponents/Header';
//import ScrollingImages from './Mycomponents/ScrollingImages';
//import Introduction from './Mycomponents/Introduction';
//import Footer from "./Mycomponents/Hello";


    
    

function App() {
  return (
    
    <Router>
      
      <MenuBar/> 
      
     
      
      

      <Routes>
      <Route path="/Home" element={<Home/>} />
        <Route path="/Courses" element={<TrainingServices/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      </Router>
 
  );
}



export default App;

/*import React from "react";
import Home from "./MyWebsite/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;*/

