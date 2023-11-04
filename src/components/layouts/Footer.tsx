import React from 'react'
import Maps from '../fragments/Maps'
import Contact from '../fragments/Contact'
import { Image } from 'react-bootstrap'

const Footer: React.FC = () => {
  return (
    <>
      <div id="locations" className="d-flex justify-content-center">
      <h1 className="text-center fs-4">Contact and Location</h1>
      <Image src="/img/g-map-location.png" alt="g-map" width={30} />
      </div>
    <div className="d-flex flex-column flex-lg-row justify-content-between">
      <Contact />
      <Maps />
    </div>
    </>
  )
}

export default Footer