import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import OurRecipes from './Components/OurRecipes/OurRecipes'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipes></OurRecipes>
    </div>
  )
}

export default App
