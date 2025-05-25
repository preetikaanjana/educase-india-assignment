import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const WelcomePage = () => {
  return (
        <motion.div className='container' initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div className='h-full flex flex-col justify-end gap-[29px]'>
            <div className='flex flex-col gap-[10px]'>
              <h1 className='heading'>Welcome to PopX</h1>
              <h2 className='body-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
            </div>
            <div className='btn-container'>
              <Link 
                to="/signup"
                className="btn-signup"
                title="Create a new account on PopX">
                Create Account
              </Link>
              <Link
              to="/login"
              className="btn-login"
              title="Login if you already have an account">
                Already Registered? Login
              </Link>
            </div>
        </div>
        </motion.div>
  )
}

export default WelcomePage