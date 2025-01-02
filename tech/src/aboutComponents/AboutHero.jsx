import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './AboutHero.css';

function AboutHero() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setData(data.aboutHero));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="about-hero container">
      <h4 className="section-title gradient-text">{data.title}</h4>
      <div className="about-hero-content">
        <div className="about-hero-text">
          <h3 className="about-title">Biz Kimik?</h3>
          <h5 className="about-subtitle">{data.subtitle}</h5>
          <p className="about-description">{data.description}</p>
        </div>
        <div className="about-hero-visual">
          <div className="hero-image-wrapper">
            <img src={data.images.mainImage.src} alt={data.images.mainImage.alt} className="hero-image" />
            <div className="black-shadow"></div>
          </div>
          <div className="stats-grid">
            {data.stats.map((stat, index) => (
              <div className="stats-item" key={index}>
                <div className="about-num">
                  <CountUp end={parseInt(stat.num)} duration={2} /> <span>+</span>
                </div>
                <div className="num-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="game">
        <img src={data.images.gameImage.src} alt={data.images.gameImage.alt} />
      </div>
    </section>
  );
}

export default AboutHero;
