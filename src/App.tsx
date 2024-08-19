
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import OurClientsSection from './components/OurClientsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import DownloadAppSection from './components/DownloadAppSection'
import SubscribeSection from "./components/SubscribeSection"
import Footer from './components/Footer'




function App() {


  return (
    <div className=' font-mainFont  font-light'>
      <Hero />
      <About />
      <OurClientsSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadAppSection />
      <SubscribeSection />
      <Footer />

    </div>
  )
}

export default App
