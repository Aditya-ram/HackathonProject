import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from '../App'
import Recent from './Recent'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path ='/' element={<App/>}/>
        <Route path='/commits' element={<Recent/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default Router
