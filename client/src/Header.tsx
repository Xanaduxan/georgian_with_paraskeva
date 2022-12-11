import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

  return (
      <header className="App-header">
        <h1 className='main-title'>Грузинский с Параскевой</h1>
          <div><ul className="nav-bar">
       
           <li className='nav'>
              <NavLink className="header__item" to="/">
                Главная
              </NavLink>
           </li>
            <li className='nav'>
              <NavLink className="header__item" to="/lessons">
              Занятия
              </NavLink>
            </li>
            <li className='nav'>
              <NavLink className="header__item" to="/team">
              Команда
              </NavLink>
            </li>
            <li className='nav'>
              <NavLink className="header__item" to="/reviews">
              Отзывы
              </NavLink>
            </li>
             </ul>
             </div>
      </header>
   
)
    }
export default Header;