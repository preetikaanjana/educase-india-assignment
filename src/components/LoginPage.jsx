import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'


const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Check if both fields are filled and email is valid
  useEffect(() => {
    const { email, password } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValid(email && password && isEmailValid);
  }, [formData]);

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // All good
    navigate('/profile');
  };

  return (
    <motion.div className='login-container' initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.3, ease: 'easeInOut' }}>
      <div className='flex flex-col gap-[33px]'>
        <div className='element-spacing'>
          <h1 className='heading'>Signin to your <br /> PopX account</h1>
          <h2 className='body-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
        </div>

        <div className='element-spacing'>
          <div className='element-spacing'>
            <InputField
              name='email'
              context='Email Address'
              value={formData.email}
              onChange={(val) => handleInputChange('email', val)}
            />
            <InputField
              name='password'
              context='Password'
              value={formData.password}
              onChange={(val) => handleInputChange('password', val)}
            />
          </div>
          <div>
            <button
              onClick={handleLogin}
              className={`btn-login-2 text-white transition-all duration-300 ${
                isValid ? 'bg-[#6C25FF]' : 'bg-gray-400'
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
