import React from 'react';
import Banniere from '../../components/Banner';
import MenuDeroulant from '../../components/MenuDeroulant';
import FiabiliteTexte from './fiabiliteTexte'; // Importez les composants texte
import RespectTexte from './respectTexte';
import SecuriteTexte from './securiteTexte';
import ServiceTexte from './serviceTexte';
// import style from './styles.scss'
// <div className='divMenu'>


function About() {
  return (
    <div className='divMenu'>
      <Banniere type="about" />
      <MenuDeroulant titre="Fiabilité" texte={<FiabiliteTexte />} /> {/* Utilisez le composant texte */}
      <MenuDeroulant titre="Respect" texte={<RespectTexte />} />
      <MenuDeroulant titre="Service" texte={<ServiceTexte />} />
      <MenuDeroulant titre="Sécurité" texte={<SecuriteTexte />} />
    </div>
  );
}

export default About;
