const React = require('react');

function Footer() {
  return (
    <footer>
      <div className="page-footer">

        {/* <div className="logo">
          <img src="img/logo.png" alt="логотип" /> */}
          <a className="btn btn-quick-order" href="/lessons">Заказать</a>
        {/* </div> */}
        <ul className="footer-menu">
          <li><a href="team.html">Команда</a></li>
          <li><a href="lessons.html">Занятия</a></li>
          {/* <li><a href="#">Продукты</a></li> */}
          <li><a href="reviews.html">Отзывы</a></li>
        </ul>
      </div>
      <div className="footer-bottom clearfix">
        <div className="footer-social">
          <a className="social-btn social-btn-in" href="https://www.instagram.com/ymarilo/">Инстаграм</a>
          <a className="social-btn" href="https://t.me/ymarilogeo ">Telegram</a>

        </div>

        <div className="developer">

          {`© Xanadu ${new Date().getFullYear()}`}
        </div>
      </div>

    </footer>

  );
}

module.exports = Footer;
