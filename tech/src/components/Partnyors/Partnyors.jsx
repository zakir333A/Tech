import React, { useEffect, useState } from 'react';
import './Partnyors.css';

function Partnyors() {
  const [partners, setPartners] = useState([]);


  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setPartners(data.partners))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="partnyors">
      <div className="slider">
        {partners.concat(partners).map((partner) => (
          <img key={partner.id} src={partner.image} alt={`Partner ${partner.id}`} />
        ))}
      </div>
    </div>
  );
}

export default Partnyors;
