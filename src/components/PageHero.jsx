import React from 'react';
import '../styles/PageHero.css';

const PageHero = ({ title }) => {
  return (
    <section 
      className="about-hero"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'/images/index.avif\') no-repeat center center/cover',
        height: '25vh',
        minHeight: '200px',
        marginBottom: '1rem'
      }}
    >
      <div className="container">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;
