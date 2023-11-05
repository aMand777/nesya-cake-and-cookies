import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { getPromotion, getDetailPromo } from '../../utils'
import ModalDetail from './ModalDetail'

const Promo = () => {
  const promotion = getPromotion()
  const [detailId, setDetailId] = React.useState<number>(0)
  const [modalShow, setModalShow] = React.useState<boolean>(false)

  const handleClickDetail = (id: number) => {
    setDetailId(id)
    setModalShow(true)
  }

  const detail = getDetailPromo(detailId)
  return (
    <>
      <Card id="promo" className="bg-promo">
        <div className="bg-black w-100 h-100 bg-opacity-75">
          <h1 data-aos="fade-up" className="text-center text-white mt-3">
            Promo up to 20%
          </h1>
          <div className="d-flex flex-column flex-lg-row flex-wrap gap-5">
            {promotion.length > 0 &&
              promotion.map((promo, i) => (
                <Card.Body key={promo.id} className="d-flex flex-column justify-content-center align-items-center">
                  <Image data-aos="fade-down" data-aos-duration={1000} data-aos-delay={i * 200} onClick={() => handleClickDetail(promo.id)} src={promo.img} alt={promo.img} fluid className="rounded-4 cursor-pointer img" />
                  <h5 data-aos="fade-down" data-aos-duration={500} data-aos-delay={i * 100} className="text-white mt-2">
                    {promo.title}
                  </h5>
                </Card.Body>
              ))}
          </div>
        </div>
      </Card>
      {detail.length > 0 && <ModalDetail title={detail[0].title} img={detail[0].img} price={detail[0].price} show={modalShow} onHide={() => setModalShow(false)} />}
    </>
  )
}

export default Promo
