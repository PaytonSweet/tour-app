import { useState, useEffect } from 'react'
import TourCard from './TourCard' // Import the TourCard component

function Gallery({ tours, removeTour }) {
  const [fetchedTours, setFetchedTours] = useState([])

  // Fetch data from the API on mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/react-tours-project')
        const data = await response.json()
        setFetchedTours(data)
      } catch (error) {
        console.error('Error fetching tours:', error)
      }
    }

    fetchTours()
  }, [])

  return (
    <div className="gallery">
      {fetchedTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  )
}

export default Gallery