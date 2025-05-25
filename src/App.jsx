import WelcomePage from './components/WelcomePage'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import MobileLayout from './components/MobileLayout'
import ProfilePage from './components/ProfilePage'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <MobileLayout>
        <AnimatePresence mode='wait'>
        <Routes>
        <Route path='/' element={<WelcomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />}  />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
        </AnimatePresence>
      </MobileLayout>
    </>
  )
}

export default App
