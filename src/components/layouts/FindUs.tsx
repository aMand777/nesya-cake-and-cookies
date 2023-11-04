import React from 'react'
import { Card, Image } from 'react-bootstrap'

const FindUs: React.FC = () => {
  return (
    <div>
      <Card id="order">
        <Card.Body className="w-100 bg-body-tertiary">
          <Card.Title className="fst-italic fw-semibold">Find Us On :</Card.Title>
          <div className="d-flex justify-content-around align-items-center bg-warning">
            <Image src="/img/shopee-food.png" alt="shopee-food" className="w-findUs" fluid />
            <Image src="/img/grab-food.png" alt="grab-food" className="w-findUs" fluid />
            <Image src="/img/go-food.png" alt="go-food" className="w-findUs" fluid />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FindUs
