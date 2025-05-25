import React, { useState } from 'react'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const SignUpPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: ''
  })

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const createAccount = () => {
    const { fullname, phone, email, password, company, isAgency } = formData

    if (!fullname || !phone || !email || !password || !company || !isAgency) {
      alert('Please fill out all fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return
    }

    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.')
      return
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.')
      return
    }

    navigate('/profile')
  }

  return (
    <motion.div className='signup-container' initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <div className='flex flex-col gap-[31px] h-full'>
        <div>
          <h1 className='heading'>Create your <br /> PopX account</h1>
        </div>
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-[29px]'>
            <InputField name='fullname' context='Full Name' abstract={true} value={formData.fullname} onChange={(val) => handleChange('fullname', val)} />
            <InputField name='phone' context='Phone number' abstract={true} value={formData.phone} onChange={(val) => handleChange('phone', val)} />
            <InputField name='email' context='Email address' abstract={true} value={formData.email} onChange={(val) => handleChange('email', val)} />
            <InputField name='password' context='Password' abstract={true} value={formData.password} onChange={(val) => handleChange('password', val)} />
            <InputField name='company' context='Company name' abstract={false} value={formData.company} onChange={(val) => handleChange('company', val)} />
            <div className='flex flex-col gap-[10px]'>
              <p className='Agency'>
                Are you an Agency <span className='text-[#DD4A3D]'>*</span>
              </p>
              <div className='input-radio-container'>
                <label htmlFor='yes' className='input-label'>
                  <input
                    type='radio'
                    name='isAgency'
                    id='yes'
                    value='yes'
                    checked={formData.isAgency === 'yes'}
                    onChange={(e) => handleChange('isAgency', e.target.value)}
                  />
                  Yes
                </label>
                <label htmlFor='no' className='input-label'>
                  <input
                    type='radio'
                    name='isAgency'
                    id='no'
                    value='no'
                    checked={formData.isAgency === 'no'}
                    onChange={(e) => handleChange('isAgency', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className='btn-create' onClick={createAccount}>Create Account</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SignUpPage
