import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../api/api';
import { Star, MapPin } from 'lucide-react';

const RestaurantDetail = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        api.get(`/restaurants/${id}`).then(res => setRestaurant(res.data)).catch(console.error);
    }, [id]);

    if (!restaurant) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: '20px' }}>
                {/* Header Images */}
                <div style={{ height: '350px', background: '#333', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
                    <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
                        <h1 style={{ fontSize: '2.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{restaurant.name}</h1>
                        <p style={{ fontSize: '1.1rem' }}>{restaurant.cuisine.join(', ')}</p>
                        <p style={{ fontSize: '1rem', opacity: 0.9 }}>{restaurant.address}</p>
                    </div>
                </div>

                {/* Sticky Tab Header */}
                <div style={{ display: 'flex', gap: '40px', borderBottom: '1px solid #e8e8e8', marginBottom: '20px' }}>
                    {['Overview', 'Order Online', 'Reviews', 'Photos', 'Menu'].map(tab => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            style={{
                                padding: '15px 0',
                                cursor: 'pointer',
                                color: activeTab === tab.toLowerCase() ? '#EF4F5F' : '#696969',
                                borderBottom: activeTab === tab.toLowerCase() ? '3px solid #EF4F5F' : '3px solid transparent',
                                fontWeight: activeTab === tab.toLowerCase() ? 600 : 400
                            }}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className="content-area">
                    <h2 style={{ marginBottom: '15px' }}>About this place</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                        <div style={{ background: '#24963f', color: 'white', padding: '4px 8px', borderRadius: '6px', fontWeight: 'bold' }}>{restaurant.rating} <Star size={12} /></div>
                        <span style={{ color: '#696969' }}>Dining Ratings</span>
                    </div>

                    <h3>Average Cost</h3>
                    <p style={{ marginBottom: '20px' }}>₹{restaurant.averageCost} for two people (approx.)</p>

                    {activeTab === 'order online' && (
                        <div>
                            <h3>Order Online</h3>
                            {/* Simple menu rendering */}
                            {restaurant.menu && restaurant.menu.map((category, idx) => (
                                <div key={idx} style={{ marginBottom: '20px' }}>
                                    <h4>{category.category}</h4>
                                    {category.items.map((item, i) => (
                                        <div key={i} className="flex-between" style={{ padding: '10px', borderBottom: '1px solid #f0f0f0' }}>
                                            <div>
                                                <div style={{ fontWeight: '500' }}>{item.name}</div>
                                                <div style={{ fontSize: '0.9rem', color: '#696969' }}>₹{item.price}</div>
                                            </div>
                                            <button className="btn btn-outline" style={{ color: '#EF4F5F', borderColor: '#EF4F5F' }}>Add</button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div>
                            <h3>Reviews</h3>
                            {restaurant.reviews.map((rev, i) => (
                                <div key={i} style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}>
                                    <div className="flex-between">
                                        <strong>{rev.user}</strong>
                                        <span style={{ background: '#24893f', color: 'white', padding: '1px 5px', borderRadius: '4px', fontSize: '0.8rem' }}>{rev.rating} ★</span>
                                    </div>
                                    <p style={{ color: '#696969', marginTop: '5px' }}>{rev.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <Footer />
        </>
    );
};

export default RestaurantDetail;
