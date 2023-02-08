import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import GlobalContextProvider from './context/Jobcontext'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ConfirmSignup from './pages/ConfirmSignup'
import { StateMachineProvider } from 'little-state-machine';
import MainDashboardTeacher from './pages/recruiter/dashboard/MainDashboardTeacher'



function App() {

  return (
    <BrowserRouter>
    <StateMachineProvider>
      <GlobalContextProvider>
          <main className="relative">
          <Navbar/> 
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/:id' element={<Detail/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/confirm-signup' element={<ConfirmSignup/>} />
              <Route path='/dashboard/recruiter' element={<MainDashboardTeacher/>} />
            </Routes>
          </main>
      </GlobalContextProvider>

    </StateMachineProvider>
    </BrowserRouter>
  )
}

export default App
