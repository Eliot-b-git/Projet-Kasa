import React from 'react';
import logoblanc from '../../assets/logoblanc.png';
import './styles.scss'; // Assurez-vous d'avoir un fichier SCSS pour le Footer

function Footer() {
  return (
    <div className="footer-container">
      <img src={logoblanc} alt="logoblanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
