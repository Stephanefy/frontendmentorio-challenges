import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { BoardContextProvider } from './context/BoardContext'

function App() {

  const [sidebarHeight, setSidebarHeight] = useState(0)
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);


  return (
    <div className="bg-secondary-gray relative">
      <Navbar/>
      <BoardContextProvider>
        <main className="flex relative">
          <Sidebar sidebarHeight={sidebarHeight} setHideSidebar={setHideSidebar} hideSidebar={hideSidebar}/>
          <Main setSidebarHeight={setSidebarHeight} hideSideBar={hideSidebar}/>
        </main>
      </BoardContextProvider>
    </div>
  )
}

export default App
