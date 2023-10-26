import React from 'react'
import Page from './Components/Page'
import ImageComp from './Components/ImageComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Page/>}/> 
     <Route exact path ='/images' element={<ImageComp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App