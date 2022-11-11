const React = require('react');
const Layout = require('./Layout');

function Team() {
  return (
    <Layout>
      <div className="container">
        <h2 className="section-title">Параскева</h2>
        <div className="promo-container">
          <div><img className="promo-photo" src="/images/promo-photo.jpg" alt="Преподаватель Параскева" /></div>
          <div>
            <p>
              Меня зовут Параскева, я окончила Восточный факультет Санкт-Петербургского
              государственного университета, где шесть лет углубленно изучала грузинский,
              персидский и армянский языки.
            </p>

            <p>Занимаюсь преподаванием грузинского с 2016 года.</p>

            <p>
              В свободное время я люблю гулять по городу,
              смотреть исторические передачи и придумывать новые задания для
              учеников.
            </p>

            <ul className="edu">
              Образование:
              <li>2021 аспирантура института Философии СПБГУ</li>
              <li>2018 магистратура Восточного факультета СПБГУ</li>
              <li>2016 бакалавриат Восточного факультета СПБГУ</li>
            </ul>
          </div>

        </div>

      </div>
    </Layout>
  );
}
module.exports = Team;
