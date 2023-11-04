import { Carousel, Card, Image } from 'react-bootstrap'

function Carousels() {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center fs-1 fst-italic fw-semibold my-5">Featured Products</Card.Title>
        <Carousel data-bs-theme="dark" className="container">
          <Carousel.Item interval={2000}>
            <div className="mx-auto w-fit rounded-3 overflow-hidden">
              <Image src="/img/brownies.jpg" alt="brownies" fluid />
            </div>
            <Carousel.Caption>
              <h3 className="fst-italic">Brownies</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="mx-auto w-fit rounded-3 overflow-hidden">
              <Image src="/img/kue-kismis.jpg" alt="kue-kismis" fluid />
            </div>
            <Carousel.Caption>
              <h3 className="fst-italic text-white">Kue Kismis</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={200}>
            <div className="mx-auto w-fit rounded-3 overflow-hidden">
              <Image src="/img/pretzels.jpg" alt="pretzels" fluid />
            </div>
            <Carousel.Caption>
              <h3 className="fst-italic text-white">Pretzels</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="mx-auto w-fit rounded-3 overflow-hidden">
              <Image src="/img/choco-cookies.webp" alt="choco-cookies" fluid />
            </div>
            <Carousel.Caption>
              <h3 className="fst-italic text-white">Choco Cookies</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="mx-auto w-fit rounded-3 overflow-hidden">
              <Image src="/img/cookies-marbels.jpg" alt="cookies-marbels" fluid />
            </div>
            <Carousel.Caption>
              <h3 className="fst-italic text-white">Cookies Marbels</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  )
}

export default Carousels
