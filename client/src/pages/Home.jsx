import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: '20px' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Inspiration for your first order</h1>
                {/* We will add collections and categories here later or simpler version */}
                <p>Check "Dining Out" for the restaurant list.</p>
            </div>
            <Footer />
        </>
    );
};

export default Home;
