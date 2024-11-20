import React, { useState } from 'react';
import './Carousel.css';

const images = [
    'imagenes/cyborg1.jpg',
    'imagenes/cyborg2.jpg',
    'imagenes/cyborg3.jpg',
    'imagenes/cyborg4.jpg',
    'imagenes/cyborg5.jpg',
    'imagenes/cyborg6.jpg',
    'imagenes/cyborg7.jpg',
    'imagenes/cyborg8.jpg',
    'imagenes/cyborg9.jpg',
    'imagenes/cyborg10.jpg',
    'imagenes/cyborg11.jpg',
    'imagenes/cyborg12.jpg'
];

const descriptions = [
    'Descripción del cíborg 1: Un guerrero futurista con armadura metálica y ojos brillantes defendiendo a los seres humanos.',
    'Descripción del cíborg 2: Un cíborg ágil y rápido, diseñado para misiones de infiltración en grupos que pretendan hacer mal a los seres humanos.',
    'Descripción del cíborg 3: Un cíborg con brazos mecánicos poderosos, ideal para trabajos pesados que ayudan a los humanos a tener estructuras inalterables.',
    'Descripción del cíborg 4: Un cíborg con habilidades de camuflaje, perfecto para operaciones encubiertas para ayudar a que los humanos estén fuera de peligro.',
    'Descripción del cíborg 5: Un cíborg médico, equipado con herramientas para salvar vidas si así lo requiere el ser humano al cual lo hará más fuerte y eficaz.',
    'Descripción del cíborg 6: Un cíborg con alas mecánicas, capaz de volar a grandes alturas para el bienestar de los seres humanos.',
    'Descripción del cíborg 7: Un cíborg con sensores avanzados para detectar amenazas a larga distancia por quienes quieran invadir los espacios de los humanos.',
    'Descripción del cíborg 8: Una versión mejorada del Cíborg 7, con mayor precisión y velocidad.',
    'Descripción del cíborg 9: Un cíborg con habilidades de hackeo, experto en ciberseguridad, siempre en pos del ser humano.',
    'Descripción del cíborg 10: Un cíborg con una armadura resistente, diseñado para combate cuerpo a cuerpo que pongan en peligro a los humanos.',
    'Descripción del cíborg 11: Un cíborg con habilidades de comunicación avanzada, ideal para espionaje en defensa de los humanos.',
    'Descripción del cíborg 12: Un cíborg con una inteligencia artificial avanzada, capaz de aprender y adaptarse rápidamente, para la ayuda del ser humano.'
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (n) => {
        setCurrentSlide((currentSlide + n + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-header">Carrusel Cíborg</div>
            <img src={images[currentSlide]} alt={`Cíborg ${currentSlide + 1}`} className="active" />
            <button className="prev" onClick={() => changeSlide(-1)} aria-label="Previous slide">❮</button>
            <button className="next" onClick={() => changeSlide(1)} aria-label="Next slide">❯</button>
            <div className="carousel-description">{descriptions[currentSlide]}</div>
        </div>
    );
};

export default Carousel;
