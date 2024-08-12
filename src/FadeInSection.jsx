// FadeInSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './CSS/FadeInSection.css'; // Make sure to import your CSS file

const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const style = {
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''} fade-${direction}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
