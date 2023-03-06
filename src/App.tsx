import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import GlobalContextProvider from './context/Jobcontext'
import { AuthContextProvder } from './context/AuthContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ConfirmSignup from './pages/ConfirmSignup'
import { StateMachineProvider } from 'little-state-machine'
import MainDashboardTeacher from './pages/recruiter/dashboard/MainDashboardTeacher'
import Auth from './hoc/Auth'
import MainPanel from './pages/recruiter/dashboard/main/MainPanel'
import JobOffersPanel from './pages/recruiter/dashboard/jobOffers/JobOffersPanel'
import BasicInfoInputs1 from './pages/recruiter/dashboard/jobOffers/JobOfferForm/BasicInfoInputs1'

function App() {
    return (
        <BrowserRouter>
            <StateMachineProvider>
                <AuthContextProvder>
                    <GlobalContextProvider>
                        <main className="relative">
                            <Navbar />
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="job/:id" element={<Detail />} />
                                <Route path="login" element={<Login />} />
                                <Route path="signup" element={<SignUp />} />
                                <Route
                                    path="confirm-signup"
                                    element={<ConfirmSignup />}
                                />
                                <Route
                                    element={
                                        <Auth allowedRoles={['EMPLOYER']} />
                                    }
                                >
                                    <Route
                                        path="dashboard"
                                        element={<MainDashboardTeacher />}
                                    >
                                        <Route path="main" element={<MainPanel/>} />
                                        <Route path="job-offers" element={<JobOffersPanel/>}>
                                        
                                        
                                        </Route>

                                    </Route>
                                </Route>
                                <Route path="/*" element={<h1>404</h1>} />
                            </Routes>
                        </main>
                    </GlobalContextProvider>
                </AuthContextProvder>
            </StateMachineProvider>
        </BrowserRouter>
    )
}

export default App
