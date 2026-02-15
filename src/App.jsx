import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Signup from './Signup'
import Products from '../Products'
import About from './About'
import Cart from './Cart'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import Electronics from '../Electronics'
import Fashion from '../Fashion'
import Sports from './Sports'
import Books from './Books'
import Living from './Living'
import Conformation from './Conformation'
import Register from './Register'


function Layout({children}){
    return(
      <div>
        {children}
      </div>
    )
}

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to="/Signup" />} />
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Electronics' element={<Electronics />}></Route>
        <Route path='/Fashion' element={<Fashion />}></Route>
        <Route path='/Sports' element={<Sports />}></Route>
        <Route path='/Books' element={<Books/>}></Route>
        <Route path='/Living' element={<Living />}></Route>
        <Route path='/Conformation' element={<Conformation />}></Route>
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
