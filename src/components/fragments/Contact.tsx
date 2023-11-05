import React from 'react'
import { Card, Image } from 'react-bootstrap'

const Contact: React.FC = () => {
  return (
    <>
      <Card className="bg-contact contact-lg">
        <div className="bg-black w-100 h-100 bg-opacity-75">
          <Card.Body className="d-flex flex-rows justify-content-evenly align-items-center">
            <a href="https://www.instagram.com" target="_blank">
              <Image src="/img/ig-color.png" alt="instagram" className="text" />
            </a>
            <h1 className="text-white fs-6">Nesya Cake & Cookies</h1>
          </Card.Body>
          <Card.Body className="d-flex flex-rows justify-content-evenly align-items-center">
            <a href="https://web.whatsapp.com/" target="_blank">
              <Image src="/img/wa-color.png" alt="whatsapp" className="text" />
            </a>
            <h1 className="text-white fs-6">+62 123-4567-8910</h1>
          </Card.Body>
          <Card.Body className="d-flex flex-rows justify-content-evenly align-items-center">
            <a href="https://www.tiktok.com/id-ID/" target="_blank">
              <Image src="/img/tiktok-color.png" alt="tiktok" className="text" />
            </a>
            <h1 className="text-white fs-6">Nesya Cake & Cookies</h1>
          </Card.Body>
          <Card.Body className="d-flex flex-rows justify-content-evenly align-items-center">
            <a href="https://mail.google.com/" target="_blank">
              <Image src="/img/gmail-color.png" alt="gmail" className="text" />
            </a>
            <h1 className="text-white fs-6">nesya@gmail.com</h1>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default Contact
