import { useState, useEffect } from 'react'
import TourCard from './TourCard' // Import the TourCard component

function Gallery({ tours, removeTour }) {
  const [fetchedTours, setFetchedTours] = useState([])
  const [error, setError] = useState(null) // State for error handling

  // Fetch data from the API on mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/react-tours-project') // Use the proxy URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        setFetchedTours(data)
      } catch (error) {
        console.error('Error fetching tours:', error)
        setError(error.message) // Set error message
      }
    }

    fetchTours()
  }, [])

  if (error) {
    return <p>Error fetching tours: {error}</p> // Display error message
  }

  return (
    <div className="gallery">
      {fetchedTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  )
}

export default Gallery