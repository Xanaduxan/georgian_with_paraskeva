const React = require('react');

function Header() {
  return (
    <header>
      <div className="page-header">

        <div className="header-top">
          <ul className="main-nav">
            <li><a href="/team">Команда</a></li>
            <li><a href="/lessons">Занятия</a></li>
            {/* <li><a href="#">Продукты</a></li> */}
            <li><a href="/reviews">Отзывы</a></li>
          </ul>
          <a className="btn btn-quick-order" href="/lessons">Заказать</a>

        </div>

      </div>
      <link rel="stylesheet" href="/css/headerStyle.css" />

    </header>

  );
}

module.exports = Header;
