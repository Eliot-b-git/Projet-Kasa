import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../data.json';
import style from './styles.scss'

const LogementsPage = () => {
  const firstSixLogements = jsonData.slice(0, 6);

  return (
    <div className="logements-container">
      {firstSixLogements.map((logement, index) => (
        <Link key={index} to={`/logement/${logement.id}`} className="logement-link">
          <div className="logement-card">
            <p className="logement-description">{logement.title}</p>
            <img src={logement.cover} alt={`Cover ${index}`} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LogementsPage;



