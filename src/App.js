import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Quoute from "./components/Quoute"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quoute /> }></Route>
          <Route path='/about' element={<Profile /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App