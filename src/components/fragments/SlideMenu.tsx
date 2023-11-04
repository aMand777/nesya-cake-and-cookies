import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Image from 'react-bootstrap/Image'
import { Nav } from 'react-bootstrap'

function SlideMenu() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="link" onClick={handleShow} className="me-2">
        <Image src="/img/list.svg" width="30" className="d-sm-none" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="top" className="d-sm-none m-0">
        <Offcanvas.Header closeButton className="z-3 p-4 w-25 position-absolute end-0">
          <Offcanvas.Title />
        </Offcanvas.Header>
        <Nav className="text-center my-3">
          <Nav.Link onClick={handleClose} className="link my-3" href="#home">
            Home
          </Nav.Link>
          <Nav.Link onClick={handleClose} className="link my-3" href="#about">
            About
          </Nav.Link>
          <Nav.Link onClick={handleClose} className="link my-3" href="#locations">
            Locations
          </Nav.Link>
        </Nav>
      </Offcanvas>
    </>
  )
}

export default SlideMenu
