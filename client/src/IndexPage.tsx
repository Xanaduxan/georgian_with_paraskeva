import React from 'react';




const IndexPage = () => {
  return (<>
  <div>
    <h2 className="section-title">Школа грузинского языка</h2>
    <div className='index-container'>

        
        <div className='about-container'>
          <p className='about'>
          Привет, меня зовут Параскева.
          <br />
          Я преподаватель грузинского языка!
          <br />

          Научу понимать и говорить на грузинском языке!
        </p>
        <p className='about'>

          Я веду свой блог в
          {' '}
          <a href="https://www.instagram.com/ymarilo/">инстаграме</a>
          {' '}
          и
          {' '}
          <a href="https://t.me/ymarilogeo">телеграмм канал</a>, подписывайся, чтобы прямо сейчас начать учить грузинский
          язык!
        </p>

        <p className='about'>
          ссылки
          <a href="https://www.instagram.com/ymarilo/">Instagram</a>
          <a href="https://t.me/ymarilogeo">Telegram</a>
        </p>
        </div>
          <img className="index-photo" alt='grape'src='images/grape.jpg'/>
      </div>
      <div className="reviews">
        <div className="container">
          <h2 className="section-title">Отзывы</h2>

          <a className="btn to-all-reviews" href="/reviews" title="Посмотреть все отзывы">Все отзывы</a>
         
        </div>
        </div>
      </div>
  

</>

     

  );
}

export default IndexPage;
