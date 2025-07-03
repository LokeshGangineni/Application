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

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  
  

  return (
    <>
      <div className=' '>

        <Router>

          <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route  path='/dashboard' element={<DashboardLayout/>} >
              <Route path='Analytics' element={<Analytics/>} />
              <Route path='LiveTracking' element={<LiveTracking/>} />

            </Route>
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
