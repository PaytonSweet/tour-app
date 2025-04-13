import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './Gallery' // Import the Gallery component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // For routing

function App() {
  // State to hold all tours
  const [tours, setTours] = useState([
    { id: 1, name: 'Tour 1', description: 'Description of Tour 1' },
    { id: 2, name: 'Tour 2', description: 'Description of Tour 2' },
    { id: 3, name: 'Tour 3', description: 'Description of Tour 3' },
  ])

  // Handler to remove a tour
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
  }

  return (
    <Router>
      <div>
        <header>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
        </header>
        <main>
          <Routes>
            {/* Define routes */}
            <Route
              path="/"
              element={
                <Gallery tours={tours} removeTour={removeTour} />
              }
            />
            {/* Add more routes here if needed */}
          </Routes>
        </main>
        <footer>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
