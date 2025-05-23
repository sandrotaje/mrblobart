import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const aboutImage = '/images/about.avif';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Mr Blob Art</h1>
        </div>
      </section>
      
      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container">
              <img 
                src={aboutImage} 
                alt="Mr Blob Artist" 
                className="about-main-image"
              />
            </div>
            <div className="about-text-content">
              <h2>The Artist's Journey</h2>
              <div className="about-description">
                <p>
                  Mr. Blob is an Italian graffiti artist and illustrator born in 1988.
                </p>
                <p>
                  His artistic research has a particular personal trait because, not
                  able to complete his art degree, he builds his own technical-artistic
                  career as a self-taught. This is how he dives into the 'underground'
                  culture and in its various arts and facets.
                </p>
                <p>
                  The walls of his native city become a medium for his first artworks
                  and technical experimentation in his early creative years.
                </p>
                <p>
                  Mr. Blob chooses large formats that fully express his poetry of
                  freedom and where no detail is left to chance.
                </p>
                <p>
                  In his early 20's, driven by the improvements in his abilities, he
                  moves to Milan, where he finds a rich and diverse artistic scene.
                  Here, he begins his collaborations with other artists from all parts of
                  Italy that will lead him to participate in different events in Europe and
                  overseas.
                </p>
                <p>
                  In Milan, Blob establishes his unique style due to his subjects.
                  Initially, these were nothing but a distortion of reality. His characters
                  appeared with deformed faces and bodies, and all shared wide
                  realistic eyes aimed at telling a personal story. In recent years, his
                  interest and research in new characters result in a fusion between
                  human and animal worlds, with the latter prevailing.
                </p>
                <p>
                  His protagonists are mainly irrational living beings who act according to
                  instinct, just like the artist with his illustrations. Each animal species,
                  perceiving reality in a different way, develops features that are
                  appropriate to the specific context, and this is what inspires Mr. Blob
                  to highlight those 'supernatural senses', almost magical, that his
                  creations present. Each character's features are enhanced through
                  the use of colours, which he expertly mixes, creates and reshapes
                  as in an actual magic ritual.
                </p>
              </div>
              <div className="cta-buttons">
                <a href="https://www.instagram.com/direct/new?text=Hello%20Mr%20Blob%20Art%2C%0AI%20am%20interested%20in%20your%20artwork.%0A%0APlease%20get%20in%20touch%20with%20me." target="_blank" rel="noopener noreferrer" className="cta-button">Send IM in Instagram</a>
                <Link to="/walls" className="cta-button secondary">View Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
