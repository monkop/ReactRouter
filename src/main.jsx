import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './components/Github/Github.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children : [
      {
        path:"",
        element :<Home/>
      },
      {
        path: "About",
        element : <About />
      },
      {
        path: "Contact",
        element : <Contact />
      },
      {
        path: "User/:userid",
        element : <User />
      },
      {
        path: "Github",
        element : <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
