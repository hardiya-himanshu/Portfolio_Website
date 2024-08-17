import React, { useState } from 'react'
import portfolioTheme from '../../higher_order_function/portfolioTheme'

function Header({onToggleTheme, darkMode}) {
    const [resumeHover, setResumeHover] = useState(false)
  return (
    <div className={`${darkMode?"bg-customDark text-customWhite":'bg-customLight text-customBlack'}  flex items-center justify-between p-2 fixed top-0 right-0 left-0 `}>
      <div  className="flex gap-3 items-center">
        <div className="font-bold text-4xl">PORTFOLIO</div>
      </div>

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
      </div>
      <div className="flex gap-3 items-center">
        <div><img src={darkMode?"/resume_icon_light.png":"/resume_icon_dark.png"} alt="Resume" width="30px" /></div>
        <div><img className='cursor-pointer' onClick={onToggleTheme} src={darkMode?"/light.png":"/dark.png"} alt={darkMode?"Light":"Dark"} width="25px" /></div>
      </div>
    </div>
  )
}

export default portfolioTheme(Header)
