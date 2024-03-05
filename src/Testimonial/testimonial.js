import React, { useState } from 'react'
import "./style.css"


function Testimonial() {

  const [currentIndex, setcurrentIndex] = useState(0)
  
  const testimonial = [
    {
      quote:"This is first quote",
      author:"First author",
      
    },
    {
      quote:"This is second quote",
      author:"Second author"
    },
    {
      quote:"This is third quote",
      author:"Third author",
      
    },
  ];

  const handlePreClick = () => {
    setcurrentIndex((currentIndex + testimonial.length - 1) % testimonial.length);
  };
   
  
  const handleNextClick = () => {
    setcurrentIndex((currentIndex + testimonial.length + 1) % testimonial.length);
  };
  

  return (
    <>
    <div className="testimonial">
      <div className="quote">
        {testimonial[currentIndex].quote}
        <div className="author">
          {testimonial[currentIndex].author}
          
          <div className="nav">
            <button onClick={handlePreClick} >prev</button>
            <button  onClick={handleNextClick}>next</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial;