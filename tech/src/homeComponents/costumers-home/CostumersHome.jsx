import React from 'react'
import CostumerCard from './CostumerCard'
import './CostumerCard.css'

function CostumersHome() {
  return (
    <div className='costumer-total container'>
        <h4 className='gradient-heading'>Müştərİlərİmİz</h4>
        <CostumerCard />
        <div className="costumersButton">
          <a href="#">   <button className='orangeBtn'>Hamısına bax</button></a>
      
        </div>
    </div>
  )
}
  
export default CostumersHome