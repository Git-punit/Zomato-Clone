import React, { useState } from 'react';
import { MapPin, Search, ChevronDown, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this or use styled-components/inline styles

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <nav className="navbar">
            <div className="container flex-between">
                <div className="nav-left flex-center">
                    <button className="mobile-menu-btn"><Menu size={24} /></button>
                    <Link to="/" className="brand-logo">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" className="logo-img" />
                    </Link>
                </div>

                <div className="search-bar-container flex-center">
                    <div className="location-input flex-center">
                        <MapPin className="icon text-red" size={20} />
                        <input type="text" placeholder="New Delhi" defaultValue="New Delhi" />
                        <ChevronDown className="icon" size={16} />
                    </div>
                    <div className="separator"></div>
                    <div className="search-input flex-center">
                        <Search className="icon text-gray" size={20} />
                        <input
                            type="text"
                            placeholder="Search for restaurant, cuisine or a dish"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="nav-right flex-center">
                    <Link to="/login" className="nav-link">Log in</Link>
                    <Link to="/signup" className="nav-link">Sign up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
