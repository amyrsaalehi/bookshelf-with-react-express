import React, { useState } from 'react'
import { Col, Card as BCard } from 'react-bootstrap'
import { useHistory } from 'react-router'

function Card({ book }) {
  const [scale, setScale] = useState(1)
  const history = useHistory()

  const handleMouseEnter = () => {
    setScale(1.3)
  }

  const handleMouseLeave = () => {
    setScale(1)
  }

  const handleCardClicked = () => {
    history.push(`/${book.title.replaceAll(' ', '-')}`)
  }

  return (
    <Col xs={12} md={5} lg={3}>
      <BCard className="bg-dark text-white" style={{ overflow: 'hidden' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClicked}
      >
        <BCard.Img src={book.imageLink} alt={book.title} width={100} height={400}
          style={{ objectFit: 'cover', opacity: .3, transform: `scale(${scale})`, transition: 'all 500ms' }} />
        <BCard.ImgOverlay >
          <BCard.Title>
            {book.title}
          </BCard.Title>
          <BCard.Text>
            {
              book.author
            }
          </BCard.Text>
          <BCard.Text>
            {book.year}
          </BCard.Text>
        </BCard.ImgOverlay>
      </BCard></Col>
  )
}

export default Card
