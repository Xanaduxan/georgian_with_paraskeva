import React from 'react'

const Footer = () => {


  return (
    <footer>
     
        <div className="footer-social">
          <a className="social-btn social-btn-in" href="https://www.instagram.com/ymarilo/">Инстаграм</a>
          <a className="social-btn" href="https://t.me/ymarilogeo ">Telegram</a>

    

      </div>
        <div className="developer">

          {`© Xanadu ${new Date().getFullYear()}`}
        </div>

    </footer>

  );
}

export default Footer;
