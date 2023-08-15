// Banniere.js
import React from 'react';
import './styles.scss'; // Import du fichier SASS
import MontagneBanner from '../../assets/MontagneBanner.png';
import PlageBanner from '../../assets/PlageBanner.png';

const Banniere = ({ type }) => {
  if (type === 'accueil') {
    return <img className="BannerImage1" src={PlageBanner} alt='PlageBanner' />;
  } else if (type === 'about') {
    return <img className="BannerImage2" src={MontagneBanner} alt='MontagneBanner' />;
  } else {
    return null; // Gérer les autres cas si nécessaire
  }
};

export default Banniere;
