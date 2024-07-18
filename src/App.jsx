import './app.scss'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Timeline from './components/timeline/Timeline'
import About from './components/about/About'
// import Parallax from './components/parallax/Parallax'

const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Timeline />
      </section>
      {/* <section className='parallaxSection' id='Services'>
        <Parallax type='services' />
      </section> */}
      {/* <section className='parallaxSection' id='Portfolio'>
        <Parallax type='portfolio' />
      </section> */}
      <Portfolio />

      <section>
        <Services />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
      {/* <About /> */}
    </div>
  )
}

export default App
