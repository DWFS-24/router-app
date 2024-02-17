import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={'/Contacto'} > Contacto </Link>
        <Link to={'/AcercaDe'} > Acerca De </Link>
        <Link to={'/Articulo/1'} > Articulo 1 </Link>
      </div>
    </>
  )
}

export default App
