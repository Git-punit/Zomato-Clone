import React from 'react';
import { Star } from 'lucide-react';
import './RestaurantCard.css';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ data }) => {
    return (
        <Link to={`/restaurant/${data.id}`} className="restaurant-card">
            <div className="res-img-container">
                <img src={data.image} alt={data.name} className="res-img" />
                {data.promoted && <span className="promoted-tag">Promoted</span>}
                {data.discount && <div className="discount-tag">{data.discount}</div>}
            </div>
            <div className="res-details">
                <div className="flex-between res-header">
                    <h3 className="res-name">{data.name}</h3>
                    <div className="rating-badge flex-center">
                        {data.rating} <Star size={10} fill="white" style={{ marginLeft: '2px' }} />
                    </div>
                </div>
                <div className="flex-between res-meta">
                    <p className="res-cuisine">{data.cuisine.join(', ')}</p>
                    <p className="res-cost">₹{data.averageCost} for two</p>
                </div>
                <p className="res-timings text-gray">{data.timings}</p>
            </div>
        </Link>
    );
};

export default RestaurantCard;
