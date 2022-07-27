import React from 'react'
import './projekty.css';
import projekt1 from '../../assets/projekt1.webp';
import projekt2 from '../../assets/projekt2.webp';
import projekt3 from '../../assets/projekt3.webp';

const Projekty = () => {
  return (
    <div className='bestpomp-projects-container'>
      <div className='projects-title'>
      <p>PROJEKTY</p>
      </div>
      <div className='projects-photos'>
      <div className='photo1'>
      <img src={projekt1} alt='BESTPOMP'/>
      <p>NOWOCZESNY DOM</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      <div className='photo1'>
      <img src={projekt2} alt='BESTPOMP'/>
      <p>KOMPLEKS BLOKÓW</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      <div className='photo1'>
      <img src={projekt3} alt='BESTPOMP'/>
      <p>BUDYNEK MIEJSKI</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      </div>
      <div className='projects-photos'>
      <div className='photo1'>
      <img src={projekt1} alt='BESTPOMP'/>
      <p>NOWOCZESNY DOM</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      <div className='photo1'>
      <img src={projekt2} alt='BESTPOMP'/>
      <p>KOMPLEKS BLOKÓW</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      <div className='photo1'>
      <img src={projekt3} alt='BESTPOMP'/>
      <p>BUDYNEK MIEJSKI</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      </div>
      <div className='projects-photos'>
      <div className='photo1'>
      <img src={projekt1} alt='BESTPOMP'/>
      <p>NOWOCZESNY DOM</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      <div className='photo1'>
      <img src={projekt2} alt='BESTPOMP'/>
      <p>KOMPLEKS BLOKÓW</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      <div className='photo1'>
      <img src={projekt3} alt='BESTPOMP'/>
      <p>BUDYNEK MIEJSKI</p>
      <span>25 stycznia 2025 r.</span>
      </div>
      </div>

    </div>
  )
}

export default Projekty