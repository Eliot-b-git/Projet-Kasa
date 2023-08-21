import React from 'react';
import Banniere from '../../components/Banner';
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
      <Collapse title="Respect" content={<RespectTexte />} />
      <Collapse title="Service" content={<SecuriteTexte />} />
      <Collapse title="Sécurité" content={<ServiceTexte />} />
    </div>
  );
}

export default About;
