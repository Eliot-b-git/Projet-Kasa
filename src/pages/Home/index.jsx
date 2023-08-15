import React from 'react';
import Banniere from '../../components/Banner'; // Assurez-vous d'utiliser le bon chemin
import LogementsPage from '../../components/Card'
import './styles.scss';

function Home() {
  return (
    <div>
      <p className='TexteBanniere'>Chez vous, partout et ailleurs</p>,
      <Banniere type="accueil" />
      <LogementsPage />
    </div>
  );
}

export default Home;
