import { NavLink } from 'react-router-dom';
import './styles.scss';
import logorouge from '../../assets/logorouge.png';

const Header = () => {
  return (
    <nav className="NavHeader">
      <img src={logorouge} alt="logorouge" className="HeaderImage" />
      <div className="DivHeader">
        <NavLink exact to="/" className="StyledLink" activeClassName="ActiveLink">Accueil</NavLink>
        <NavLink to="/about" className="StyledLink" activeClassName="ActiveLink">A propos</NavLink>
      </div>
    </nav>
  );
}

export default Header;
