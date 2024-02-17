import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={'/Contacto'} > Contacto </Link>
        <Link to={'/AcercaDe'} > Acerca De </Link>
      </div>
    </>
  )
}

export default App
