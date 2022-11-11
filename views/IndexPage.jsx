const React = require('react');
const Layout = require('./Layout');

function IndexPage() {
  return (
    <Layout>
      <div className="container">
        <h2 className="section-title">Главная страница</h2>
        <p>
          Привет, меня зовут Параскева.
          <br />
          Я преподаватель грузинского языка!
          <br />

          Научу понимать и говорить на грузинском языке!
        </p>
        <p>

          Я веду свой блог в
          {' '}
          <a href="https://www.instagram.com/ymarilo/">инстаграме</a>
          {' '}
          и
          {' '}
          <a href="https://t.me/ymarilogeo">телеграмм канал</a>
          , подписывайся, чтобы прямо сейчас начать учить грузинский
          язык!
        </p>

        <p>
          ссылки
          <a href="https://www.instagram.com/ymarilo/">Instagram</a>
          <a href="https://t.me/ymarilogeo">Telegram</a>
        </p>

      </div>
      <div className="reviews">
        <div className="container">
          <h2 className="section-title">Отзывы</h2>

          <a className="btn to-all-reviews" href="/reviews" action="/reviews" method="post" title="Посмотреть все отзывы">Все отзывы</a>
          <div className="getReviews" />
        </div>
      </div>

    </Layout>

  );
}

module.exports = IndexPage;
