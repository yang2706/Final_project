import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Register from '../page/Register'
import SignUp from '../page/Signup'
import Movie from '../page/Movie'
import Navbar1 from '../page/Navbar1'
import Dynamic_router from './Dynamic_router'
function WithNav() {
  return (
    <div>
        <Navbar1/>
        <Outlet/>
    </div>
  )
}
function WithoutNav() {
  return (
    <div>
        
        <Outlet/>
    </div>
  )
}
function Router1() {
  return (
    <div>
        <BrowserRouter>
        
            <Routes>
                <Route element={<WithNav/>}>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/movie' element={<Movie/>}/>
                      <Route path='/home' element={<Home/>}/>
                      <Route path='/:id' element={<Dynamic_router/>}/>
                     
                </Route>
                 <Route element={<WithoutNav/>}>
                      <Route path='register' element={<Register/>}/>
                      <Route path='signup' element={<SignUp/>}/>
                      
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router1