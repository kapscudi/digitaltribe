import logo from '../logo.svg';
import './Header.css';
// import '../styles/Responsive.css';

// const wallpaper = [
//   'https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-dots.png',
//   'https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-blue.png',
//   'https://www.teahub.io/photos/full/21-217137_developer.png',
//   'https://www.teahub.io/photos/full/21-218864_cartoon.png',
// ];

const Header = () => {
  return (
    <div
      className="header-container"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://legerantvirtuel.espaceabp.com/wp-content/uploads/2021/04/menu-secondaire-lgv.jpg")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="menu-container">
        <div className="header-menu">
          <img className="header-logo" src={logo} alt="" />
          <p className="menu-item">About</p>
          <p className="menu-item">Services</p>
          <p className="menu-item">Portfolio</p>
          <p className="menu-item">Contact</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
