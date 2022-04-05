import React from 'react';
import About from './About/About';
import './App.css';
import Figure from './Figure/Figure';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import Menu from './Menu/Menu';
import { Testimonial } from './Testimanial/Testimonial';
import ScrollTop from './shared/ScrollTop/';
import { ContextProvider } from './store/AppContext';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <About />
        <Figure />
        <Menu />
        <Testimonial />
        <Location />
        <Footer />
        <ScrollTop />
      </div>
    </ContextProvider>
  );
}

export default App;
