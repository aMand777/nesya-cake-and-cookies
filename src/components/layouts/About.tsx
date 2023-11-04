import { Card, Image } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <Card id="about" className="flex-lg-row p-1 p-lg-3">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 d-flex justify-content-around">
            <Image src="/img/cake-icon-1.png" alt="cake-icon1" width="20" />
            <Card.Title>About</Card.Title>
            <Image src="/img/cake-icon-4.png" alt="cake-icon4" width="20" />
          </div>
          <Card.Text className="text-center fst-italic">
            Nesya cake and cookies pada awalnya saya buat sebagai ungkapan rasa sayang seorang ibu kepada anak perempuan nya, karena anak perempuan itu sangat suka pada makanan manis seperti brownies, kue bolu dan kue kering. ya nama anak
            perempuan itu adalah Nesya Auristela.
          </Card.Text>
          <div className="w-100 d-flex justify-content-around">
            <Image src="/img/cake-icon-2.png" alt="cake-icon2" width="20" />
            <Image src="/img/cake-icon-3.png" alt="cake-icon3" width="20" />
          </div>
          <Card.Text className="text-center fst-italic">
            Nesya cake and cookies memiliki tagline <span className="fw-semibold">"Selalu jadi pemanis di setiap momen yang manis"</span> it's not just about cake and cookies, it's about a girl.
          </Card.Text>
          <div className="w-100 d-flex justify-content-center">
            <Image src="/img/cookies-icon-2.png" alt="cookies-icon2" width="20" />
            <Image src="/img/cookies-icon-3.png" alt="cookies-icon3" width="20" />
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default About
