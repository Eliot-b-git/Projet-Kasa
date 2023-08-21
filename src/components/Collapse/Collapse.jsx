import {useEffect, useRef, useState} from "react";
import './Collapse.css'
const Collapse = (props) => {

    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        function handleResize() {
            const DOMElementPtr = contentRef.current;

            if (DOMElementPtr) {
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
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const btnOnClick = () => {
        setIsOpen((prevState) => !prevState)

    };

    return (
        <article
            className={`collapse__wrapper ${
                props.size === 'medium'
                    ? 'collapse__wrapper--medium'
                    : 'collapse__wrapper--large'
            }`}
        >
            <div className="collapse__titleWrapper" onClick={btnOnClick}>
                <p className="collapse__title">{props.title}</p>
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
            <div className="content-parent" ref={contentRef} style={isOpen ? { height: contentRef.current.scrollHeight +
                    "px" } : { height: "0px" }}>
                <div  className={"collapse__textWrapper"}>
                    <div className="collapse__text">{props.content}</div>
                </div>
            </div>


        </article>
    )
}

export default Collapse;