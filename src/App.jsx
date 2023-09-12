
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navbar/navbar'

function App() {
  
  return (
    <div className='Container'>
      <NavBar/>
      <ItemListContainer className="display flex justifi content-center" greeting={"Bienvenidos a Peralta Detailing"}/>
    </div>
  )
}

export default App
