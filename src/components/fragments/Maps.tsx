import React from 'react'
import { Card } from 'react-bootstrap'

const Maps: React.FC = () => {
  return (
    <Card className="w-100 maps-lg">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <iframe
          className="border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8105171337706!2d106.06128217411108!3d-6.0207313591258655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418d05d7b5d53b%3A0xd863cf7a0f4d18fe!2sPasar%20Kranggot%20Cilegon!5e0!3m2!1sid!2sid!4v1699105979030!5m2!1sid!2sid"
          width="100%"
          height={300}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </Card.Body>
    </Card>
  )
}

export default Maps
