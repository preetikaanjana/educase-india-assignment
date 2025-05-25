import React from 'react'
import { motion } from 'framer-motion'


const ProfilePage = () => {
  return (
    <motion.div className='profile-container' initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <div className='profile-header'><h1 className='text-[18px]'>Account Settings</h1></div>
        <div className='profile-card'>
            <div className='flex flex-row gap-[20px]'>
                <div className='relative size-[76px]'><img src='./Ellipse 114.png'/><div className='absolute bottom-0 right-0'><img src='./Group 1585.png' /></div></div>
                <div className='flex flex-col'><h1 className='profile-name'>Marry Doe</h1><h2 className='profile-email'>Marry@Gmail.Com</h2></div>
            </div>
            <div>
                <h2 className='profile-text'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</h2>
            </div>
        </div>
        <hr class="dashed-line" />
    </motion.div>
  )
}

export default ProfilePage