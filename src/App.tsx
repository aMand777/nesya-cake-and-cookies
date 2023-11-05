import './App.css'
import Footer from './components/layouts/Footer'
import About from './components/layouts/About'
import Intro from './components/layouts/Intro'
import Jumbotron from './components/layouts/Jumbotron'
import Navbar from './components/layouts/Navbar'
import Promo from './components/layouts/Promo'
import Carousels from './components/layouts/Carousels'
import FindUs from './components/layouts/FindUs'
import BackToTop from './components/fragments/BackToTop'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Jumbotron />
      </header>
      <main>
        <Intro />
        <Promo />
        <Carousels />
        <FindUs />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
        <BackToTop />
    </>
  )
}

export default App
