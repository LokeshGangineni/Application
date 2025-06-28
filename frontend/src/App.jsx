import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  
  

  return (
    <>
      <div className=''>

        <Router>
          <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
