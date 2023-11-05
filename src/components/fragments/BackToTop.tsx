import React from 'react'
import { Image } from 'react-bootstrap'

const BackToTop = () => {
  const [scroll, setScroll] = React.useState<number>(0)
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScroll(scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="d-flex justify-content-end">
      {scroll > 100 && (
        <a href="#" className="position-fixed bottom-0 mb-5 me-4">
          <Image src="/img/back-to-top.svg" alt="back-to-top" width={40} fluid className="bg-info rounded-circle btn-to-top" />
        </a>
      )}
    </div>
  )
}

export default BackToTop
