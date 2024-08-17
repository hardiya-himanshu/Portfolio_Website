import React, { useState } from 'react'

function Header() {
    const [resumeHover, setResumeHover] = useState(false)
  return (
    <div className={`bg-indigo-700 text-white flex items-center justify-between p-2 hover:bg-yellow-300 hover:text-black duration-300`}>
      <div className="font-bold text-4xl">PORTFOLIO</div>
      <div className="flex gap-3 items-center">
        <ul className="mx-auto w-fit  p-3 flex gap-5">
            <li className='cursor-pointer'>ABOUT</li>
            <li className='cursor-pointer'>SKILLS</li>
            <li className='cursor-pointer'>PROJECTS</li>
            <li className='cursor-pointer'>EXPERIENCE</li>
            <li className='cursor-pointer'>CERTIFICATES</li>
            <li className='cursor-pointer'>ACHIEVEMENTS</li>
            <li className='cursor-pointer'>HOBBIES</li>
        </ul>
        <div><img src="/resume_icon.png" alt="Resume" width="30px" /></div>
      </div>
    </div>
  )
}

export default Header
