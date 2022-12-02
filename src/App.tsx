import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import GlobalContextProvider from './context/Jobcontext'

function App() {

  return (
    <BrowserRouter>
    <GlobalContextProvider>
        <main className="relative">
        <Navbar/> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<Detail/>} />
          </Routes>
        </main>
    </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App
