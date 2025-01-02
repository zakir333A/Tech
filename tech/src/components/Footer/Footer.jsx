import React, { useState, useEffect } from "react";
import FootContact from "./FootContact";
import "./Footer.css";
import FootLogo from "./FootLogo";

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="foot">
      <div className="foot-container container">
        <div className="foot-top">
     
          <div className="foot-left">
            <FootLogo />
          </div>

          {/* Conditionally render forFlex based on screen size */}
          {isSmallScreen ? (
            <div className="forFlex">
              <div className="foot-links">
                <h4>Linklər</h4>
                <ul>
                  <li>
                    <a href="#">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="#">Xidmətlər və məhsullar</a>
                  </li>
                  <li>
                    <a href="#">Lahiyələr</a>
                  </li>
                  <li>
                    <a href="#">Müştərilər</a>
                  </li>
                  <li>
                    <a href="#">Əlaqə</a>
                  </li>
                  <li>
                    <a href="#">Bloq</a>
                  </li>
                </ul>
              </div>
              <div className="foot-right">
                <FootContact />
              </div>
            </div>
          ) : (
            <>
           
              <div className="foot-links">
                <h4>Linklər</h4>
                <ul>
                  <li>
                    <a href="#">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="#">Xidmətlər və məhsullar</a>
                  </li>
                  <li>
                    <a href="#">Lahiyələr</a>
                  </li>
                  <li>
                    <a href="#">Müştərilər</a>
                  </li>
                  <li>
                    <a href="#">Əlaqə</a>
                  </li>
                  <li>
                    <a href="#">Bloq</a>
                  </li>
                </ul>
              </div>
              <div className="foot-right">
                <FootContact />
              </div>
            </>
          )}
        </div>
      </div>

  
      <div className="foot-bottom container">
        <p>
          &copy; 2025 Tech. Bütün hüquqlar{" "}
          <a href="#">WebCoder</a> qorunur.
        </p>
      </div>
    </section>
  );
}

export default Footer;
