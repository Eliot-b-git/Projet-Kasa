import React from 'react';
import Banniere from '../../components/Banner'; // Assurez-vous d'utiliser le bon chemin
import LogementsPage from '../../components/Card'

function Home() {
  return (
    <div>
      <Banniere type="accueil" />
      <LogementsPage />
    </div>
  );
}

export default Home;
