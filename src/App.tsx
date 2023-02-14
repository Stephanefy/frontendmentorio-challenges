import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {


  return (
    <div className="bg-secondary-gray h-full">
      <Navbar/>
      <main className="flex w-full h-full relative">
        <Sidebar/>
        <Main/>
      </main>
    </div>
  )
}

export default App
