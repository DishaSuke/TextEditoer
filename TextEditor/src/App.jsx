import React from 'react'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([    
    {
      path: "/",
      element: <> <Navbar name={"TextEditor"}/> <Textarea/> <Footer/>  </>,
    },
    {
      path: "/about",
      element:<><Navbar/> <About/>  <Footer/></> ,
    }
   
  ]);


function App() {
  return (
    <>
      <Navbar name="TextEditor"/>
      <Textarea />
      <Footer/>
    
    </>
  )
}
return (
  <>
  <RouterProvider router={router} />

  </>
)
} 


export default App

          
   