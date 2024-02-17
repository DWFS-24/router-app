import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Product from './components/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/AcercaDe",
    element: <AboutUs />,
  },
  {
    path: "/Contacto",
    element: <Contact /> ,
  },
  {
    path: "/Articulo/:id",
    element: <Product /> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
