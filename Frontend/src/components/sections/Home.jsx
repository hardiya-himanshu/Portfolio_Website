import React from 'react'
import portfolioTheme from '../../higher_order_function/portfolioTheme'

function Home({darkMode}) {
  return (
    <div className={`${darkMode?"bg-customDark2 text-customWhite":'bg-customLight2 text-customBlack'} h-screen`}>
      
    </div>
  )
}

export default portfolioTheme(Home)
