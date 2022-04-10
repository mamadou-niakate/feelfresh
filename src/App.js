import React from 'react';
import About from './About/About';
import './App.css';
import Figure from './Figure/Figure';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import Menu from './Menu/Menu';
import { Testimonial } from './Testimanial/Testimonial';
import Header from './Appbar/Appbar'
import { Element } from 'react-scroll'


function App() {
  return (
    <div className="App">
      <Header />
      <Element name='about'>
        <About/>
      </Element>
      <Figure />
      <Element name='menu'>
        <Menu />
      </Element>
      <Element name='testimonials'>
        <Testimonial/>
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      <Footer />
    </div>
  )
}

export default App;
