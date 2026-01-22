import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import api from '../api/api';
import { Filter } from 'lucide-react';

const DiningOut = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await api.get('/restaurants');
                setRestaurants(res.data);
            } catch (err) {
                console.error("Failed to fetch restaurants", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container" style={{ minHeight: '80vh', marginTop: '20px' }}>
                <div className="filter-bar flex-center" style={{ justifyContent: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <button className="btn btn-outline flex-center" style={{ gap: '5px' }}> <Filter size={16} /> Filters</button>
                    <button className="btn btn-outline">Rating: 4.0+</button>
                    <button className="btn btn-outline">Pure Veg</button>
                    <button className="btn btn-outline">Cuisines</button>
                </div>

                <div className="hero-banner" style={{ marginBottom: '40px' }}>
                    <img src="https://b.zmtcdn.com/data/pictures/chains/1/50481/92045749cb975c57c45970c3cce27d1a_o2_featured_v2.jpg" alt="Banner" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }} />
                </div>

                <h1 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Dining Out Restaurants in New Delhi</h1>

                {loading ? <p>Loading...</p> : (
                    <div className="restaurant-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                        {restaurants.map(res => (
                            <RestaurantCard key={res.id} data={res} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default DiningOut;
