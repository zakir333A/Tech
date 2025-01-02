import React, { useEffect, useState } from 'react';
import '../costumers-home/costumerCard.css';

function CostumerCard() {
  const [customers, setCustomers] = useState([]);
  const [maxCards, setMaxCards] = useState(10); 

  // Ekran ölçüsünə görə kart sayını təyin edən funksiya
  const updateMaxCards = () => {
    const width = window.innerWidth;
    if (width < 375) {
      setMaxCards(12);
    } else if (width < 768) {
      setMaxCards(8);
    } else {
      setMaxCards(10);
    }
  };

  useEffect(() => {
   
    updateMaxCards();
    window.addEventListener('resize', updateMaxCards);

    return () => {
      window.removeEventListener('resize', updateMaxCards);
    };
  }, []);

  useEffect(() => {
   
    fetch('/db.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Şəbəkə xətası!');
        }
        return response.json();
      })
      .then((data) => {
        if (data.customers) {
          setCustomers(data.customers);
        } else {
          console.error('Customers məlumatı tapılmadı.');
        }
      })
      .catch((error) => console.error('Məlumat alınarkən xəta:', error));
  }, []);

  return (
    <div className="costumer container">
      <div className="customer-list">
        {customers.length > 0 ? (
          customers.slice(0, maxCards).map((customer) => ( 
            <div className="costumer-card" key={customer.id}>
              <div className="costumer-image">
                <img src={customer.image} alt={`Müştəri ${customer.id}`} />
              </div>
            </div>
          ))
        ) : (
          <p>No customers found.</p>
        )}
      </div>
    </div>
  );
}

export default CostumerCard;
