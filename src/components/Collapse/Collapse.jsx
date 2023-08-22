import { useEffect, useRef, useState } from "react";
import './Collapse.css' // Import des styles CSS spécifiques pour le composant Collapse

// Définition du composant Collapse
const Collapse = (props) => {
    // Référence à l'élément de contenu pour obtenir sa hauteur
    const contentRef = useRef(null);

    // État pour stocker la hauteur maximale du contenu
    const [maxHeight, setMaxHeight] = useState(null);

    // État pour gérer l'état d'ouverture ou de fermeture du collapse
    const [isOpen, setIsOpen] = useState(false);

    // Effet useEffect pour gérer les changements de taille de la fenêtre et calculer la hauteur du contenu
    useEffect(() => {
        function handleResize() {
            const DOMElementPtr = contentRef.current;

            if (DOMElementPtr) {
                // Calcul de la hauteur totale du contenu en tenant compte des marges et des rembourrages
                const computeHeight = () => {
                    const { height } = DOMElementPtr.getBoundingClientRect();
                    const { paddingTop, paddingBottom, marginTop, marginBottom } = getComputedStyle(DOMElementPtr);
                    const heightDeltas = [paddingTop, paddingBottom, marginTop, marginBottom].map(parseFloat);
                    const computedHeight = height + heightDeltas.reduce((acc, value) => acc + value, 0);
                    return computedHeight;
                };
                setMaxHeight(computeHeight());
            } else {
                setMaxHeight(null);
            }
        }
        // Ajout d'un écouteur d'événement pour la fenêtre pour gérer les changements de taille
        window.addEventListener('resize', handleResize);
        handleResize();

        // Nettoyage de l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Gestionnaire de clic pour inverser l'état d'ouverture ou de fermeture
    const btnOnClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    // Retour du JSX représentant le composant Collapse
    return (
        <article
            className={`collapse__wrapper ${
                props.size === 'medium'
                    ? 'collapse__wrapper--medium'
                    : 'collapse__wrapper--large'
            }`}
        >
            {/* Conteneur du titre du Collapse et de la flèche d'expansion/réduction */}
            <div className="collapse__titleWrapper" onClick={btnOnClick}>
                <p className="collapse__title">{props.title}</p>
                {/* SVG représentant la flèche d'expansion/réduction */}
                <svg
                    className={`collapse__arrow ${isOpen ? "rotate" : "anti-rotate"}`}
                    width="25"
                    height="15"
                    viewBox="0 0 25 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
                        fill="white"
                    />
                </svg>
            </div>
            {/* Conteneur du contenu qui peut être réduit ou étendu */}
            <div className="content-parent" ref={contentRef} style={isOpen ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
                <div className={"collapse__textWrapper"}>
                    {/* Contenu réellement affiché */}
                    <div className="collapse__text">{props.content}</div>
                </div>
            </div>
        </article>
    );
}

// Exportation du composant Collapse
export default Collapse;
