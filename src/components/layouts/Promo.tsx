import { Card, Image } from 'react-bootstrap'

const Promo = () => {
  return (
    <>
      <Card id="promo" className="bg-promo">
        <div className="bg-black w-100 h-100 bg-opacity-75">
          <h1 className="text-center text-white mt-3">Promo up to 20%</h1>
          <div className="d-flex flex-column flex-lg-row flex-wrap gap-5">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/img/cake-1.png" alt="cake-icon1" fluid className="rounded-4" />
              <h5 className="text-white mt-2">Tiramisu Coklat</h5>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/img/cake-2.jpg" alt="cake-icon2" fluid className="rounded-4" />
              <h5 className="text-white mt-2">Bolu Pandan</h5>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/img/cake-3.jpg" alt="cake-icon3" fluid className="rounded-4" />
              <h5 className="text-white mt-2">Custom Birthday Cake</h5>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/img/cookies-1.jpg" alt="cookies-icon1" fluid className="rounded-4" />
              <h5 className="text-white mt-2">Choco Cookies and Peanut</h5>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/img/cookies-2.jpg" alt="cookies-icon2" fluid className="rounded-4" />
              <h5 className="text-white mt-2">Aneka Kue Lebaran</h5>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src="/img/cookies-3.png" alt="cookies-icon3" fluid className="rounded-4" />
              <h5 className="text-white mt-2">Choco Chips</h5>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Promo
