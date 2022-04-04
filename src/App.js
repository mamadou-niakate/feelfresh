import React from 'react';
import About from './About/About';
import './App.css';
import Figure from './Figure/Figure';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import Menu from './Menu/Menu';
import { Testimonial } from './Testimanial/Testimonial';
import ScrollTop from './shared/ScrollTop/';

function App() {
  return (
    <div className="App">
      <About />
      <Figure />
      <Menu />
      <Testimonial />
      <Location />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
