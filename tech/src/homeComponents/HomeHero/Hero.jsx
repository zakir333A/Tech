import React from "react";
import "./Hero.css";
import { useSpring, animated } from '@react-spring/web';

function Hero() {
  const props1 = useSpring({
    from: { number: 0 },
    to: { number: 500 },
    config: { tension: 150, friction: 80 },
  });

  const props2 = useSpring({
    from: { number: 0 },
    to: { number: 150 },
    config: { tension: 150, friction: 80 },
  });

  return (
    <section className="hero-wrapper container">
      <div className="total">
        <div className="hero-left-content">
          <div className="hero-left-top">
            <div className="hero-back">
              <img src="/hero-back.png" alt="background" />
            </div>
            <h2>
              Bİz İnsanları ön planda tutan <br /> texnologİya İnnovatoruyuq
            </h2>
            <p>
              "v-TECHSAP" İT xidmətləri, bulud saxlanması, kibertəhlükəsizlik və
              innovativ infrastruktur idarəçiliyi ilə müştərilərinə etibarlı
              texnologiya dəstəyi təmin edir.
            </p>
            <button>Bizdən soruş</button>
          </div>
        </div>
        <div className="hero-left-bottom">
          <div className="hero-left-card">
            <h5>
              <animated.span>
                {props1.number.to(n => n.toFixed(0))}
              </animated.span>
              <span>+</span>
            </h5>
            <p>Xidmət göstərdiyimiz şirkətlərin sayı</p>
          </div>
          <div className="hero-left-card">
            <h5>
              <animated.span>
                {props2.number.to(n => n.toFixed(0))}
              </animated.span>
              <span>+</span>
            </h5>
            <p>Gördüyümüz işlərin sayı</p>
          </div>
        </div>
      </div>
      <div className="hero-right-content">
        <div className="hero-right-img">
          <div className="overlay"></div>
          <img src="/hero.jpg" alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
