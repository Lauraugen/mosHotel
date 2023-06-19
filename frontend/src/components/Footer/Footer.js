import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>Mos<i className="fa-solid fa-hotel"></i>otel</h1>
            <p>Hotel | Kioto, Prefectura de Kioto, Japón</p>
          </div>
          <div>
            <a href="https://facebook.com/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://instagram.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>© 2023 MOS Hotel Group</h4>
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Statement© 2023 Park Hotel Group</a>

          </div>
         
          <div>
            <h4>Others</h4>
            <a href="https://fontawesome.com/">2023</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
