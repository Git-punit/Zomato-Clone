import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, cover, isActive, onClick }) => {
    return (
        <div className={`category-card ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="cat-img-container">
                <img src={cover} alt={title} className="cat-img" />
            </div>
            <div className="cat-title">{title}</div>
        </div>
    );
};

export default CategoryCard;
