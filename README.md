# Zomato Clone

A robust full-stack restaurant discovery and food delivery application clone, built using the MERN stack (MongoDB, Express, React, Node.js). This project aims to replicate the core detailed experience of the original Zomato website, featuring pixel-perfect design, responsive layouts, and essential user flows.

## 🚀 Features

- **Home Page**: Dynamic landing page with category exploration (Dining Out, Delivery, Nightlife).
- **Restaurant Listings**: Browse restaurants with advanced filters (Cuisine, Rating, Cost, etc.).
- **Restaurant Details**: Comprehensive view including:
    - **Overview**: Ratings, average cost, cuisines, and location.
    - **Menu**: Simulated "Order Online" functionality.
    - **Reviews**: User ratings and comments.
- **Design System**: Custom CSS implementation matching Zomato's brand colors (#EF4F5F) and typography (Inter).
- **Responsive Design**: Fully mobile-responsive layout.
- **Mock Backend**: Node.js/Express server providing simulated data for restaurants, menus, and collections.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite), React Router DOM, Axios, Lucide React (Icons), Vanilla CSS (CSS Modules approach).
- **Backend**: Node.js, Express.js, CORS.
- **Data**: JSON-based mock database (easily extensible to MongoDB).

## 📂 Project Structure

```bash
Zomato-Clone/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, Cards, etc.)
│   │   ├── pages/          # Main application pages
│   │   └── api/            # Axios API configuration
│   └── ...
├── server/                 # Node.js Backend
│   ├── data/               # Mock JSON data
│   ├── index.js            # Server entry point
│   └── ...
└── README.md               # Project Documentation
```

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Git-punit/Zomato-Clone.git
   cd Zomato-Clone
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### 🏃‍♂️ Running the App

To run the application locally, you need to start both the backend server and the frontend development server.

**Terminal 1: Start Backend**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2: Start Frontend**
```bash
cd client
npm run dev
# Client runs on http://localhost:5173
```

Open `http://localhost:5173` in your browser to view the app.

### 🚀 Production Build

To serve the optimized specific build via the Node backend:

1. Build the React app:
   ```bash
   cd client
   npm run build
   ```
2. Start the server (it serves static files from `client/dist` in production):
   ```bash
   cd ../server
   npm start
   ```
   
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
