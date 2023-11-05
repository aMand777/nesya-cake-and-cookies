import React from 'react'
import { Carousel, Card, Image } from 'react-bootstrap'
import { getDetailFeatureProduct, getFeaturedProduct } from '../../utils'
import ModalDetail from './ModalDetail'

function Carousels() {
  const featureProduct = getFeaturedProduct()
  const [detailId, setDetailId] = React.useState<number>(0)
  const [modalShow, setModalShow] = React.useState<boolean>(false)

  const handleClickDetail = (id: number) => {
    setDetailId(id)
    setModalShow(true)
  }

  const detail = getDetailFeatureProduct(detailId)
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title data-aos="fade-down" data-aos-duration={1000} data-aos-delay={200} className="text-center fs-1 fst-italic fw-semibold my-5">
            Featured Products
          </Card.Title>
          <Carousel data-bs-theme="dark" className="container">
            {featureProduct.length > 0 &&
              featureProduct.map((item) => (
                <Carousel.Item key={item.id} interval={2000}>
                  <div className="mx-auto w-fit rounded-3 overflow-hidden">
                    <Image onClick={() => handleClickDetail(item.id)} src={item.img} alt={item.img} fluid className="cursor-pointer" />
                  </div>
                  <Carousel.Caption>
                    <h3 className="fst-italic text-info">{item.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </Card.Body>
      </Card>
      {detail.length > 0 && <ModalDetail title={detail[0].title} img={detail[0].img} price={detail[0].price} show={modalShow} onHide={() => setModalShow(false)} />}
    </>
  )
}

export default Carousels
