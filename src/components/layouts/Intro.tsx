import { Card, Image } from 'react-bootstrap'

function Intro() {
  return (
    <>
      <Card className="flex-lg-row">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Image src="/img/cake.png" alt="cake-icon" width="100" height="100" />
          <h6>Cake</h6>
          <p className="text-center fst-italic">Cake cake apa yang serem? boneka cake, 😂 yuk silakan di order, tersedia mulai dari kue ulang tahun sampai kue bolu pandan kesukaan kakek nenek kamu pun ada loh, kami tunggu checkout an nya.</p>
        </Card.Body>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Image src="/img/cookies.png" alt="cookies-icon" width="100" height="100" />
          <h6>Cookies</h6>
          <p className="text-center fst-italic">Kamu tau ga bedanya jemuran sama kue? sama-sama bisa kering, haha.. jokes nya sengaja dibikin garing biar ga lama-lama scroll nya yuk langsung order, tersedia mulai dari kue kering buat lebaran sampai kue kering buat arisan juga bisa, silakan dipesan ya.</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default Intro
