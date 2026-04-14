import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">
        <strong>HELP US IMPROVE</strong>
        Take a brief survey about today's visit
        <a href="#" >Begin Survey</a>
      </div>

      {/* <hr /> */}

      {/* MAIN */}
      <div className="footer-main">

        <div className="footer-column">
          <h4>FWRD</h4>
          <p><a href="#">Customer Care</a></p>
          <p><a href="#">Track Your Order</a></p>
          <p><a href="#">Shipping & Returns</a></p>
          <p><a href="#">Gift Certificates</a></p>
          <p><a href="#">About Us</a></p>
          <p><a href="#">562-407-3230</a></p>
          <p><a href="#">Live Chat</a></p>
        </div>

        <div className="footer-column">
          <h4></h4>
          <p><a href="#">The Loyalty Program</a></p>
          <p><a href="#">Ambassador Program</a></p>
          <p><a href="#">Affiliate</a></p>
          <p><a href="#">Stores</a></p>
          <p><a href="#">Careers</a></p>
        </div>

        <div className="footer-column footer-newsletter">
          <h4>NEWSLETTER</h4>
          <p className="newsletter-text">
            Be the first to know about new arrivals, sales & promos by submitting <br />your email. You can opt out at any time.
          </p>
          <p><a href="#">privacy policy</a></p>

          <div className="newsletter-box">
            <input placeholder="Sign up for our weekly emails" />
            <span>→</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>JOIN US</h4>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">YouTube</a></p>
          <p><a href="#">X</a></p>
          <p><a href="#">Pinterest</a></p>
        </div>

        <div className="footer-column">
          <h4>OUR APPS</h4>
          <p><a href="#">iPhone</a></p>
          <p><a href="#">iPad</a></p>
        </div>

      </div>

      <hr />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div>
          © 2026 Eminent, Inc. (a Revolve Group company). All Rights Reserved.
        </div>

        <div className="footer-links">
          <span><a href="#">Terms</a></span>
          <span><a href="#">Privacy</a></span>
          <span><a href="#">Accessibility Statement</a></span>
          <span><a href="#">Cookie Preferences</a></span>
          <span><a href="#">CA Privacy Rights</a></span>
          <span><a href="#">CA Supply Chains</a></span>
          <span><a href="#">Your Privacy Choices - CA</a></span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;