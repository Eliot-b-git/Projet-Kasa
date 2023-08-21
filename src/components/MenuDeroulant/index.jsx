import React, { useState } from 'react';
import './styles.scss';
import flecheImage from '../../assets/Fleche.png'
import Collapse from '../Collapse/Collapse';

const MenuDeroulant = ({ titre, texte }) => {
  const [ouvert, setOuvert] = useState(false);

  const toggleOuvert = () => {
    setOuvert(!ouvert);
  };

  return (
    <div className="menu-deroulant-wrapper">
      <div className="titre-wrapper" onClick={toggleOuvert}>
        <h2 className="titre">{titre}</h2>
        <img className={`fleche${ouvert ? 'ouvert' : ''}`} src={flecheImage} alt="Fleche" />
      </div>
      <div className={`contenu${ouvert ? 'ouvert' : ''}`}>{texte}</div>
    </div>
  );
};

export default MenuDeroulant;


