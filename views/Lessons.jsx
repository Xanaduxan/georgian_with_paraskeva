const React = require('react');
const Layout = require('./Layout');

function Lessons() {
  return (
    <Layout>
      <p>Выберите желаемый день и время, и мы подберем для Вас оптимальный урок</p>
      <form className="feedback-form" action="/mail" method="post">
        <div className="feedback-form-group">
          <label htmlFor="fullname">Ваше имя*:</label>
          <input type="text" name="fullname" id="fullname" required />
        </div>
        <div className="clearfix">
          <div className="feedback-form-group feedback-form-group-left-part">
            <label htmlFor="phone">
              Номер
              телефона*:
            </label>
            <input type="text" name="phone" id="phone" required />
          </div>

          <div className="feedback-form-group feedback-form-group-right-part">
            <label htmlFor="email">Email*:</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="feedback-form-group">
            <label>
              Удобные дни
              <br />
              <select>
                <option>понедельник/пятница</option>
                <option>вторник/суббота</option>
                <option>Индивидуально</option>
              </select>
            </label>
            <label>
              Удобное время
              <br />
              <select>
                <option>19:00-20:00</option>
                <option>18:00-19:00</option>
                <option>Индивидуально</option>
              </select>
            </label>
          </div>
        </div>
        <div className="order-form-group">
          <label htmlFor="text">Доп. комментарий:</label>
          <textarea name="textarea" id="text" cols="20" rows="2" />
        </div>

        <div className="checkbox-area">
          <label>
            <input type="checkbox" name="subscription" checked />
            Я согласен(на) на
            обратный звонок
          </label>
        </div>
        <button type="submit" className="btn btn-primary editBtn">Отправить предварительную заявку</button>
        {' '}
        <div className="editRes" />
      </form>
      <script defer src="/js/mail.js" />
    </Layout>
  );
}

module.exports = Lessons;
