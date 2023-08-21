import React from 'react';
import Banniere from '../../components/Banner';
import MenuDeroulant from '../../components/MenuDeroulant';
import FiabiliteTexte from './fiabiliteTexte'; // Importez les composants texte
import RespectTexte from './respectTexte';
import SecuriteTexte from './securiteTexte';
import ServiceTexte from './serviceTexte';
import Collapse from '../../components/Collapse/Collapse';
import "./styles.scss";

function About() {
  return (
    <div className="divMenu">
      <Banniere type="about" />
      <Collapse title="Fiabilité" content={<FiabiliteTexte />} />
      <Collapse title="Respect" content={<FiabiliteTexte />} />
      <Collapse title="Service" content={<FiabiliteTexte />} />
      <Collapse title="Sécurité" content={<FiabiliteTexte />} />
    </div>
  );
}

export default About;
