import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>MoshManagement</h1>
            <p>.</p>
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
            <h4>Project</h4>
            <a href="https://fontawesome.com/">DAW</a>
            <a href="https://fontawesome.com/">Laura Alvarez</a>
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
