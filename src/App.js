import React, { useEffect, useRef } from 'react';
import About from './About/About';
import './App.css';
import Figure from './Figure/Figure';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import Menu from './Menu/Menu';
import { Testimonial } from './Testimanial/Testimonial';
import ScrollTop from './shared/ScrollTop/';
import { useAppContext } from './store/AppContext';
import { getOffsetY } from './utils/getOffset';

function App() {
  const { dispatch } = useAppContext()
  const aboutRef = useRef(null)
  const menuRef = useRef(null)
  const testimonialRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth'})
  },[])
  
  useEffect(() => {
    dispatch({ type: 'SET_LOCATION_POSITION', payload: getOffsetY(locationRef.current)})
    dispatch({ type: 'SET_ABOUT_POSITION', payload: getOffsetY(aboutRef.current)})
    dispatch({ type: 'SET_TESTIMONIALS_POSITION', payload: getOffsetY(testimonialRef.current)})
    dispatch({ type: 'SET_MENU_POSITION', payload: getOffsetY(menuRef.current)})
  },[dispatch])

  return (
    <div className="App">
      <About ref={aboutRef} />
      <Figure />
      <Menu ref={ menuRef } />
      <Testimonial ref={testimonialRef} />
      <Location ref={locationRef} />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App;
