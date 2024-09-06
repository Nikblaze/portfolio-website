import React, { useState } from 'react';
import './skill-card.css';

function Skillcard({name, src, rating}) {

  const [transformStyle, setTransformStyle] = useState({});

    // Calculate full, half, and empty stars
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 >= 0.5; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    // Create an array for rendering stars
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star filled">★</span>);
    }
  
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">★</span>);
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const rotateX = ((deltaY / height) * 100).toFixed(2); // Adjust the degree as needed
      const rotateY = ((-deltaX / width) * 100).toFixed(2); // Adjust the degree as needed
  
      setTransformStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      });
    };
  
    const handleMouseLeave = () => {
      setTransformStyle({
        transform: 'rotateX(0deg) rotateY(0deg)'
      });
    };


  return (
    <div className='skillcard-container' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="stars">
        {stars}
      </div>
      <div className="card" style={transformStyle}>
        <img src={src} height={80} alt="name" />
        <div className="desc">{name}</div>
      </div>
    </div>
  );
}

export default Skillcard;
