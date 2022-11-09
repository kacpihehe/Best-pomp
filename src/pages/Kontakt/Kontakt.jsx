import React from 'react';
import './kontakt.css';
import Map from './Map';

const Kontakt = () => {
  return (
    <div className='bestpomp-contact-root'>
      <div className='bestpomp-contact-panel'>
        <div className='bestpomp-contact-left'>
          <p>KONTAKT</p>
          <span>Puławska 11, 96-111 Warszawa</span>
          <span>yoyoteamtv@gmail.com</span>
          <span>(+48) 123 456 789</span>
        </div>
        <div className='bestpomp-contact-right'>
          <div className='bestpomp-contact-input'>
            <label>Imię</label>
            <input placeholder='Wpisz swoje imię' type='text' />
          </div>
          <div className='bestpomp-contact-input'>
            <label>Adres</label>
            <input placeholder='Wprowadź swój adres' type='text' />
          </div>
          <div className='bestpomp-contact-merged-input'>
            <div className='bestpomp-contact-input'>
              <label>E-mail</label>
              <input placeholder='Wpisz swój e-mail' type='text' className='mail' />
            </div>
            <div className='bestpomp-contact-input'>
              <label>Telefon</label>
              <input placeholder='Wpisz swój numer telefonu' type='text' className='tel' />
            </div>
          </div>
          <div className='bestpomp-contact-input'>
            <label>Temat</label>
            <input placeholder='Wpisz temat' type='text' />
          </div>
          <div className='bestpomp-contact-input'>
            <label>Wiadomość</label>
            <textarea placeholder='Tutaj wpisz swoją wiadomość...' type='text' />
          </div>
          <button>Wyślij</button>
        </div>
      </div>
      <div className='bestpomp-mobile-contact-panel'>
        <div className='bestpomp-contact-input'>
          <label>Imię</label>
          <input placeholder='Wpisz swoje imię' type='text' />
        </div>
        <div className='bestpomp-contact-input'>
          <label>Adres</label>
          <input placeholder='Wprowadź swój adres' type='text' />
        </div>
        <div className='bestpomp-contact-input'>
          <label>E-mail</label>
          <input placeholder='Wpisz swój e-mail' type='text' className='mail' />
        </div>
        <div className='bestpomp-contact-input'>
          <label>Telefon</label>
          <input placeholder='Wpisz swój numer telefonu' type='text' className='tel' />
        </div>
        <div className='bestpomp-contact-input'>
          <label>Temat</label>
          <input placeholder='Wpisz temat' type='text' />
        </div>
        <div className='bestpomp-contact-input'>
          <label>Wiadomość</label>
          <textarea placeholder='Tutaj wpisz swoją wiadomość...' type='text' />
        </div>
        <button>Wyślij</button>
      </div>
      <Map></Map>
    </div>
  );
};

export default Kontakt;
