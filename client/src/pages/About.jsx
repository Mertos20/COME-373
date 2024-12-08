import React from 'react';
import irmak from '../images/irmak.jpg';
import irem from '../images/irem.jpg';
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <section className="team">
        <div className="team-member">
          <img src={irmak} alt="Irmak Arı" />
          <h3>Irmak Arı</h3>
          <p>202103001037</p>
        </div>
        <div className="team-member">
          <img src="" alt="Mehmet Ertin" />
          <h3>Mehmet Ertin</h3>
          <p>202103001034</p>
        </div>
        <div className="team-member">
          <img src="" alt="Mert Bektaş" />
          <h3>Mert Bektaş</h3>
          <p>202103001030</p>
        </div>
        <div className="team-member">
          <img src={irem} alt="İrem Türk" />
          <h3>İrem Türk</h3>
          <p>202103001082</p>
        </div>
      </section>
    </div>
  );
};

export default About;
