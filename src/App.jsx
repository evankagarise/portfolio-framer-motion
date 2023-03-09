import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import Work from "./components/Work"


function App() {
  

  return (
    <div className=' bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div> 

   </div>
  )
}

export default App
