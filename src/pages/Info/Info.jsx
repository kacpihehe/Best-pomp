import React from 'react'
import './info.css';
import info_info from '../../assets/info_info.webp';

const Info = () => {
  return (
    <div className='bestpomp-info-container'>
      <div className='left'>
      <p>O NAS</p>
          <span>Jesteśmy dumni z naszych umiejętności, warsztatu pracy, atrakcyjnych cen i sukcesów, które odnosi BestPomp. Od czasu powstania firmy dokładamy wszelkich starań, aby sprawić, że jest to Firma budowlana numer jeden w miejscowości Warszawa.

<br /><br />Świadczymy różnorodne usługi dostosowane do wszystkich potrzeb naszych klientów. Bez względu na projekt nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje marzenia. Zadzwoń do nas już dziś i zobacz, co możemy dla Ciebie zrobić.</span>
      </div>

      <img src={info_info} alt='BESTPOMP'/>

      </div>
  )
}

export default Info