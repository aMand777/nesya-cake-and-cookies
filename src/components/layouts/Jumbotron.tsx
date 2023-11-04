import { Image, Container } from 'react-bootstrap'

const Jumbotron = () => {
  return (
    <>
      <div id="home" className="bg-jumbotron d-flex flex-column justify-content-center align-items-center gap-5">
        <Image src="/img/logo.png" alt="logo" fluid />
        <Container className="d-flex flex-column flex-lg-row gap-5 justify-content-around mt-5">
          <a href="#order" className="btn-jumbotron shadow-lg">
            Order
          </a>
          <a href="#promo" className="btn-jumbotron shadow-lg">
            Promo
          </a>
        </Container>
      </div>
    </>
  )
}

export default Jumbotron
