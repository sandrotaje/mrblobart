import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import '../styles/Walls.css';

const AdvWalls = () => {
  // Array of image filenames from the public/images/adv-walls directory
  const advWallImages = [
    '1.avif',
    '124bf9_027b395b0f03495dad7d33b2fe168ae9~mv2.avif',
    '124bf9_316da7a448804f4db65232694ff9eb1c~mv2.avif',
    '124bf9_40f29d245f43431fb4a58224c8111bc7~mv2.avif',
    '124bf9_4e74b0c39e2e45fbb8b0fa3a29c97062~mv2.avif',
    '124bf9_76657e7d26cd494695d5af374e59f977~mv2.avif',
    '124bf9_93044d83bee84fa4a8a79fe482882658~mv2.avif',
    '124bf9_a19f7e200d2f4fe8905898761e7dce7d~mv2.avif',
    '124bf9_b04e51e5690544f7b57684772a4997c4~mv2.avif',
    '124bf9_c0e1b73ae42c4a0abf3052baa66fff82~mv2.avif',
    '124bf9_c2ebadd5a051452baf7f015cbca03524~mv2.avif',
    '124bf9_c6270ad1a0dc4077a70e59321267e12c~mv2.avif',
    '124bf9_de59334bf0984ce1b3d1dc2f6f0dc4ff~mv2.avif',
    '124bf9_e18ec826749b44dfbc72552be91b6977~mv2.avif',
    '124bf9_e9ec0983b4a846a99054e02cbb4f8f55~mv2.avif',
    '124bf9_f1d65047d4714fb7b4f0f3ea9a7bc42f~mv2.avif',
    '124bf9_f86888ec0ef249c1852f470f39072fc2~mv2.avif',
    '3 (1).avif',
    '3.avif',
    '3.png',
    '4.avif'
  ];

  return (
    <div className="walls-page">
      <PageHero title="ADV Walls" />
      <div className="about-content-section">
        <div className="walls-grid">
          {advWallImages.map((image, index) => (
            <div key={index} className="wall-item">
              <div className="wall-image-container">
                <img 
                  src={`/images/adv-walls/${image}`} 
                  alt={`ADV Wall ${index + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvWalls;
