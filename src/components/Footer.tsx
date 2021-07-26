import { behance, githubsocial, instagram } from '../utils/techlogo';
import './Footer.css';
import logo from '../logo.svg';

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer-container">
      <img src={logo} alt="" className="logo-footer" />
      <div className="footer-socials">
        <a href="https://github.com/kapscudi">
          <img src={githubsocial} alt="" />
        </a>
        <a href="https://www.behance.net/digitaltribu">
          <img src={behance} alt="" />
        </a>
        <a href="https://instagram.com/digitaltribe_creative">
          <img src={instagram} alt="" />
        </a>
      </div>
      <p className="copyrights">
        Copyrights &copy; {today.getFullYear()} <b>Digital Tribe</b>. Tous le
        contenu du site est protégé.
        <br /> Tous est fait maison et avec ♥ . Connected to "<b>OFF TOP</b>".
      </p>
    </footer>
  );
};
export default Footer;
