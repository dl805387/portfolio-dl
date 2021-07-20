import React, { useState, useEffect } from "react";
import '../styles/Skills.css';

function Skills() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              const square = entry.target.querySelector('.square');
          
              if (entry.isIntersecting) {
                square.classList.add('square-animation');
                return; // if we added the class, exit the function
              }
          
              // We're not intersecting, so remove the class!
              square.classList.remove('square-animation');
            });
          });
          
          observer.observe(document.querySelector('.square-wrapper'));
    }, []);

    return (
        <div className="skillsSection">  
            <div></div>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <p>yo</p>
            <div class="square-wrapper">
  <div class="square"></div>
</div>
        </div>
    );
}

export default Skills;