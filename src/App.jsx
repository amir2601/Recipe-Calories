import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import OurRecipes from './Components/OurRecipes/OurRecipes'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipes></OurRecipes>
      <Footer></Footer>
    </div>
  )
}

export default App
