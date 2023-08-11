import React from 'react';
import style from './styles.scss'
import jsonData from '../data.json'; 

const LogementsPage = () => {
  const firstSixLogements = jsonData.slice(0, 6);

  return (
    <div className="logements-container">
      {firstSixLogements.map((logement, index) => (
        <div key={index} className="logement-card">
          <p className="logement-description">{logement.title}</p>
          <img src={logement.cover} alt={`Cover ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default LogementsPage;


