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
    'imagenes/cyborg11.jpg'
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (n) => {
        setCurrentSlide((currentSlide + n + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <img src={images[currentSlide]} alt={`Cíborg ${currentSlide + 1}`} className="active" />
            <button className="prev" onClick={() => changeSlide(-1)}>❮</button>
            <button className="next" onClick={() => changeSlide(1)}>❯</button>
        </div>
    );
};

export default Carousel;
