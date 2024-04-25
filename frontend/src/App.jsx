import react from 'react'
// Navigation between diffrent pages using react-router-dom. Root of project//
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Writing functions for the naviation to the pages
function Logout(){
  localStorage.clear()
  return <Navigate to='/login'/>
}

// When you first register clear localstore for old access tokens //
function RegisterAndLogout(){
  localStorage.clear()
  return<Register />
}

function App() {
 
  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path ='/'
          element = {
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='login' element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='register' element={<RegisterAndLogout />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
