import { useState } from 'react'

function TourCard({ id, name, info, price, image, onRemove }) {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4 className="tour-price">${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        {/* removes tour on click */}
        <button className="remove-btn" onClick={() => onRemove(id)}> 
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default TourCard