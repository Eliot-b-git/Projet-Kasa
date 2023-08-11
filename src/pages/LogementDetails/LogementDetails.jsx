// LogementDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../data.json';

const LogementDetails = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = jsonData[id]; // Récupère le logement correspondant à l'ID

  return (
    <div className="logement-details">
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={`Cover ${id}`} />
      {/* Affichez d'autres détails du logement */}
    </div>
  );
};

export default LogementDetails;
