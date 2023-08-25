import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import jsonData from '../../components/data.json';
import './styles.scss'
import FlecheDroite from '../../assets/FlecheDroite.png'
import FlecheGauche from '../../assets/FlecheGauche.png'
import etoileblanche from '../../assets/etoileblanche.png'
import etoilerouge from '../../assets/etoilerouge.png'
import Collapse from '../../components/Collapse/Collapse';

const LogementDetails = () => {
  const { logementId } = useParams(); // Récupérer l'ID du logement depuis les paramètres d'URL
  const logement = jsonData.find(item => item.id === logementId); // Trouver le logement correspondant dans les données

  // État pour suivre l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!logement) {
    return <Navigate to="/error" />;
  }
  


  // Fonction pour afficher l'image précédente
  const handlePrevImage = () => {
      // Mise à jour de l'index de l'image actuelle
      setCurrentImageIndex((prevIndex) => 
          // Si l'index actuel est 0, passer à la dernière image, sinon diminuer l'index de 1
          prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
      );
  };

  // Fonction pour afficher l'image suivante
  const handleNextImage = () => {
      // Mise à jour de l'index de l'image actuelle
      setCurrentImageIndex((prevIndex) =>
          // Si l'index actuel est le dernier index, passer à la première image, sinon augmenter l'index de 1
          prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
      );
  };


  const getStars = (rating) => {
    const filledStar = <img src={etoilerouge} alt="Filled Star" />;
    const emptyStar = <img src={etoileblanche} alt="Empty Star" />;
    
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= parseInt(rating)) {
        // Si l'index actuel est inférieur ou égal à la note, ajouter une étoile pleine, sinon une étoile vide
        stars.push(filledStar);
      } else {
        stars.push(emptyStar);
      }
    }
    
    return stars;
  };


  // Afficher les détails du logement
  return (
    <div className="logement-details">
      <div className="carousel">
        <p className="image-counter">
          {currentImageIndex + 1} / {logement.pictures.length}
        </p>
        <button onClick={handlePrevImage} className="prev-button"><img src={FlecheGauche} alt='FlecheGauche'/></button>
        <button onClick={handleNextImage} className="next-button"><img src={FlecheDroite} alt='FlecheDroite' /></button>
        <div className="picture">
        <img src={logement.pictures[currentImageIndex]} alt={logement.title} />          
        </div>
      </div>
      <div className='details'>
        <div className='bloc1'>

              <div className='blocgauche'>
                <h1 className="red-text">{logement.title}</h1>
                <h4 className="red-text1">{logement.location}</h4> 
                <div className="tags">
                  {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
            
              </div>          
            </div>

            <div className='blocdroite'>
              <div className='hostinfo'>
                <h4 className="red-text1 multi-line">{logement.host.name}</h4>
                <img src={logement.host.picture} alt={logement.host.name} className="photohost" />                 
              </div>
              <div className="stars">{getStars(logement.rating)}</div>   

            </div>
      
        </div>
        <div className='menuderoulant'>
          <Collapse title="Description" content={logement.description} />  
          <p className="espacerlemenu"></p>          
          <Collapse title="Equipements" content={logement.equipments.map(equipment => <p key={equipment}>{equipment}</p>)} />                    
        </div>
         
      </div>
    </div>

  );
};

export default LogementDetails;
