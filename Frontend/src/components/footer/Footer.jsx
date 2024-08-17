import React from 'react'
import portfolioTheme from '../../higher_order_function/portfolioTheme'

function Footer({darkMode}) {
  return (
    <div className={`${darkMode?"bg-customDark text-customWhite":'bg-customLight text-customBlack'} min-h-96 `}>
      d
    </div>
  )
}

export default portfolioTheme(Footer)
