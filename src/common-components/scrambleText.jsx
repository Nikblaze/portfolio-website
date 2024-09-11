import React, { useEffect, useState } from 'react';

function ScrambledText({ text, scrambleSpeed = 50, scrambleDelay = 100 }){
    const [scrambledText, setScrambledText] = useState(text.split('').map(() => ' ')); // Initial empty array
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>?,./";
  
    useEffect(() => {
      let currentText = [...scrambledText];
  
      const scrambleLetters = (index) => {
        const interval = setInterval(() => {
          currentText[index] = chars[Math.floor(Math.random() * chars.length)];
          setScrambledText([...currentText]);
        }, scrambleSpeed);
  
        setTimeout(() => {
          clearInterval(interval);
          currentText[index] = text[index]; // Set final letter
          setScrambledText([...currentText]);
        }, scrambleDelay * (index + 1)); // Staggering each letter
      };
  
      // Scramble each letter one by one
      text.split('').forEach((_, index) => {
        scrambleLetters(index);
      });
    }, [text, scrambleSpeed, scrambleDelay, chars]);
  
    return (
      <span>
        {scrambledText.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </span>
    );
  };

  export default ScrambledText;