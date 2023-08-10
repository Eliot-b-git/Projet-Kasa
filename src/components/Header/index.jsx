import { Link } from 'react-router-dom';
import './styles.scss'; // Import du fichier SASS
import logorouge from '../../assets/logorouge.png';

const Header = () => {
  return (
    <nav className="NavHeader">
      <img src={logorouge} alt="logorouge" className="HeaderImage" />
      <div className="DivHeader">
        <Link to="/" className="StyledLink">Accueil</Link>
        <Link to="/About" className="StyledLink">A propos</Link>
      </div>
    </nav>
  );
}

export default Header;
