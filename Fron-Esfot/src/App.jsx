import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { Forgot } from './pages/Forgot'
import { Register } from './pages/Register'
import { Confirm } from './pages/Confirm'
import Reset from './pages/Reset'
import {Map} from './pages/Map'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forgot/:id' element={<Forgot/>}/>
        <Route path='confirmar/:token' element={<Confirm/>}/>
        <Route path='recuperarpassword/:token' element={<Reset/>}/>
        <Route path='map' element={<Map/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
