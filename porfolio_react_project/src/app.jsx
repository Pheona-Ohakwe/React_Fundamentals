import React from 'react';
import './index.css'; 
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ImageOne from './components/ImageOne/ImageOne'; 
import ImageTwo from './components/ImageTwo/ImageTwo'; 
import ImageThree from './components/ImageThree/ImageThree';

function App() {
  return (
    <div id="body">
      <Navbar />
      <Header />
      <main className="main-content">
        <About />
        <Contact />
        <div id="gallery" className="gallery">
          <ImageOne />
          <ImageTwo />
          <ImageThree />
        </div>
      </main>
    </div>
  );
}

export default App;