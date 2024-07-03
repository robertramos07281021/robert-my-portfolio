import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from './pages/About'
import Project from "./pages/Project"
import Contact from "./pages/Contact"


function App() {


  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Contact/>

    </div>
  )
}

export default App
