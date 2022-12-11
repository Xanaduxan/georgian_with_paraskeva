import React from 'react';
import Footer from './Footer';
import './Team.css'

const Team = () => {

  return (<>
      <div>
        <h2 className="section-title">Параскева</h2>
        <div className="promo-container">
          <div>
            <img className="promo-photo" src="/images/promo-photo.jpg" alt="Преподаватель Параскева" /></div>
          <div className="team-container">
            <p className="p-container">
              Меня зовут Параскева, я окончила Восточный факультет Санкт-Петербургского
              государственного университета, где шесть лет углубленно изучала грузинский,
              персидский и армянский языки.
            </p>

            <p className="p-container">Занимаюсь преподаванием грузинского с 2016 года.</p>

            <p className="p-container">
              В свободное время я люблю гулять по городу,
              смотреть исторические передачи и придумывать новые задания для
              учеников.
            </p>

            <ul className="edu">
              Образование:
              <li className='edu-point'>2021 аспирантура института Философии СПБГУ</li>
              <li className='edu-point'>2018 магистратура Восточного факультета СПБГУ</li>
              <li className='edu-point'>2016 бакалавриат Восточного факультета СПБГУ</li>
            </ul>
          </div>

        </div>

      </div>

      </>
  
   
  );
}

export default Team;