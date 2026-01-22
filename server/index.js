const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data Path
const DATA_FILE = path.join(__dirname, 'data', 'restaurants.json');

// --- API Routes ---

// Get all restaurants
app.get('/api/restaurants', (req, res) => {
    try {
        const rawData = fs.readFileSync(DATA_FILE);
        const restaurants = JSON.parse(rawData);
        
        // Basic filtering support
        const { cuisine, sort } = req.query;
        let results = [...restaurants];

        if (cuisine) {
            results = results.filter(r => r.cuisine.includes(cuisine));
        }
        
        if (sort === 'rating_desc') {
            results.sort((a, b) => b.rating - a.rating);
        } else if (sort === 'cost_asc') {
            results.sort((a, b) => a.averageCost - b.averageCost);
        } else if (sort === 'cost_desc') {
            results.sort((a, b) => b.averageCost - a.averageCost);
        }

        res.json(results);
    } catch (error) {
        console.error("Error reading data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get restaurant by ID
app.get('/api/restaurants/:id', (req, res) => {
    try {
        const rawData = fs.readFileSync(DATA_FILE);
        const restaurants = JSON.parse(rawData);
        const restaurant = restaurants.find(r => r.id === req.params.id);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get collections (Simulated)
app.get('/api/collections', (req, res) => {
    res.json([
        { id: 1, title: "Live Cricket Screenings", count: 25, cover: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80" },
        { id: 2, title: "Newly Opened", count: 12, cover: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80" },
        { id: 3, title: "Best of Pizza", count: 18, cover: "https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=800&q=80" },
        { id: 4, title: "Trending this Week", count: 30, cover: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" }
    ]);
});

// Production: Serve static client files (if built)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
