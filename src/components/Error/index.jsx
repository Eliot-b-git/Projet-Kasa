// Error404.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="styled-link">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default Error404;
