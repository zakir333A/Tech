import React, { useEffect, useState } from "react";
import "./ServicesHome.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import OrangeBTN from "../../components/Buttons/OrangeBTN";

function ServicesHome() {
  const [services, setServices] = useState([]);
  const [isMobile, setIsMobile] = useState(false);  

  const colors = [
    "var(--Pale_Blue)",
    "var(--Soft_Gray)",
    "var(--Dusty_Green)",
    "var(--Mist_Green)",
    "var(--Soft_Lilac)",
    "var(--Creamy_Almond)",
  ];

  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data["ser-home"]) {
          setServices(data["ser-home"]);
        } else {
          console.error("Gələn məlumat formatı səhvdir", data);
        }
      })
      .catch((error) => console.error("Xəta baş verdi:", error));

    // ? Mobilde cardlarin 3 eded gorunmesi ucun  Start
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); 
      } else {
        setIsMobile(false); 
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
     // ? Mobilde cardlarin 3 eded gorunmesi ucun  End
  }, []);

  return (
    <section className="ser-home container">
      <div className="ser-head">
        <h3 className="gradient-heading">Xidmətlər</h3>
      </div>
      <div className="card-zone">
        {services.length > 0 ? (
          services.slice(0, isMobile ? 3 : services.length).map((service, index) => (
            <div
              className="card"
              key={service.id}
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="card-title">
                <h3>{service.title}</h3>
                <i><FaArrowUp /></i>
              </div>
              <p>{service.description}</p>
              <div className="card-img">
                <img src={service.imgSrc} alt={service.title} />
              </div>
            </div>
          ))
        ) : (
          <p>Yüklənir...</p>
        )}
      </div>
      {
        isMobile ? "" :   <OrangeBTN/>
      }
     
      {isMobile ?  <div className="ser-home-btn">
        <button className="orangeBtn">Daha Cox</button>
      </div> : "" }
     
    </section>
  );
}

export default ServicesHome;
