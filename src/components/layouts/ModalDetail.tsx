import React from 'react'
import { Card, Image, Button, Modal } from 'react-bootstrap'
import { formattedAmount } from '../../utils'

interface ModalDetail {
  onHide: () => void
  title: string
  img: string
  price: number
  show: boolean
}

const ModalDetail: React.FC<ModalDetail> = ({ onHide, title, img, price, ...props }) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Image src={img} alt={img} width="100%" className="rounded-4 cursor-pointer" />
          <h5 className="text-black mt-2">{title}</h5>
          <h6 className="text-black mt-2 fst-italic">{formattedAmount(price)}</h6>
        </Card.Body>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDetail
