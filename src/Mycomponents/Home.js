// src/pages/Home.js
import React from 'react';
import Classroom from './Classroom';
//import Introduction from './Introduction';
import OurVision  from './OurVision';
import Scrollcourses from './Scrollcourses';
import Footer from './Footer';
import ScrollingImages from './ScrollingImages';

const Home = () => {
  return (
    <div>
     <ScrollingImages/>
    <Classroom/>
    <OurVision/>
    <Scrollcourses/>
    <Footer/>
    </div>
  );
};

export default Home;
