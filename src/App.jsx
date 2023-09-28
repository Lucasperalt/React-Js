
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from './components/navbar/navbar'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import Detalles from './components/pages/Detalles'
import About from './components/pages/About'

function App() {
  
  return (
    <div className='Container'>
     
      <NavBar/>
      <Routes>
        
        <Route path='/' element = {<Home/>} />
        <Route path='/Contact' element = {<Contact/>} />
        <Route path='/Store' element = {<Store/>} />
        <Route path='/About' element = {<About/>} />
        <Route path='/Detalles/:id' element = {<Detalles/>} />
        </Routes> 
        
      
      
      
      
  </div>
  )
}

export default App
