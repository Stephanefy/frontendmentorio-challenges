import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { BoardContextProvider } from './context/BoardContext'

function App() {


  return (
    <div className="bg-secondary-gray relative">
      <Navbar/>
      <BoardContextProvider>
        <main className="flex w-full relative">
          <Sidebar/>
          <Main/>
        </main>
      </BoardContextProvider>
    </div>
  )
}

export default App
