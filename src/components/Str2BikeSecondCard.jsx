import React, { useState } from 'react';
import left from '../images/vlevo.svg'
import right from '../images/vpravo.svg'

// Компонент ProductCard отображает информацию о продукте и позволяет менять изображение велосипеда
const Str2BikeSecondCard = ({ title, subtitle, price, images, colorImages, leftArrow, rightArrow }) => {
    // Состояние для хранения текущего индекса изображения
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Функция для обработки клика на левую стрелку
    const handleLeftArrowClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Функция для обработки клика на правую стрелку
    const handleRightArrowClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Функция для обработки клика на изображение цвета
    const handleColorImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="product-card-str2">
            <div className="product-header-str2">
                <div className="product-title-str2">
                    <h2>{title}</h2>
                    <span>{subtitle}</span>
                </div>
                <div className="product-price-str2">{price}</div>
            </div>
            <div className="product-image-container-str2">
                {/* Изображение левой стрелки */}
                <img className="arrow left-str2" src={left} onClick={handleLeftArrowClick} />
                {/* Текущее изображение продукта */}
                <img src={images[currentImageIndex]} alt={title} className="product-image" />
                {/* Изображение правой стрелки */}
                <img className="arrow right-str2" src={right} onClick={handleRightArrowClick} />
            </div>
            <div className="product-colors-str2">
                {colorImages.map((color, index) => (
                    <img 
                        key={index} 
                        src={color} 
                        alt={`color`} 
                        className={`color-image-str2 ${currentImageIndex === index ? 'active' : ''}`} 
                        onClick={() => handleColorImageClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Str2BikeSecondCard;