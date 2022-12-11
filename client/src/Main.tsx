import React, { useState } from 'react';

import IndexPage from './IndexPage';
import Reviews from './Reviews';
import Team from './Team'
import Lessons from './Lessons'

function Main(): JSX.Element {
  const [page, setPage] = useState('index')
  return (<div><div className='nav-bar'>
          <button className="nav-button" onClick={()=> setPage('index')}>Главная</button>
          <button className="nav-button" onClick={()=> setPage('reviews')}>Отзывы</button>
          <button className="nav-button" onClick={()=> setPage('team')}>Команда</button>
          <button className="nav-button" onClick={()=> setPage('lessons')}>Занятия</button>
</div>

        {page ==='index'&&( <IndexPage />)}
        {page ==='reviews' &&( <Reviews/>)}        
        {page ==='team' &&( <Team/>)}
        {page ==='lessons' &&( <Lessons/>)}
</div>

  );
}

export default Main