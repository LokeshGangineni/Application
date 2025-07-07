import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import Analytics from './components/Analytics.jsx'
import LiveTracking from './components/LiveTracking.jsx'
import Data from './components/Data.jsx'
import PersonalData from './components/PersonalData.jsx'
import Dashboard from './components/dashboard.jsx'
import Vehicle from './components/Vehicle.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  
  

  return (
    <>
      <div className=' '>

        <Router>

          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/vehicleRegistration' element={<Vehicle />} />

            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route path='dashboard' element={<Dashboard/>} />
              <Route path='Analytics' element={<Analytics />} />
              <Route path='LiveTracking' element={<LiveTracking />} />
              <Route path='Data' element={<Data />} />
              <Route path='personalData' element={<PersonalData />} /> 
            </Route>
          </Routes>

        </Router>

      </div>
    </>
  )
}

export default App
