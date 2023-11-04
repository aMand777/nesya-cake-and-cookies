import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import SlideMenu from '../fragments/SlideMenu'

function ColorSchemesExample() {
  return (
    <>
      <Navbar fixed="top" bg="light" data-bs-theme="light" className="position-fixed top-0 start-0 end-0">
        <Container>
          <Image src="/img/favicon.svg" width="70" fluid />
          <Navbar.Collapse className="justify-content-end">
            <SlideMenu />
            <Nav className="d-none d-sm-flex">
              <Nav.Link className="link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="link" href="#locations">
                Locations
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample
