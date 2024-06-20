import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-500 text-white
    hover:bg-blue-100 hover:text-gray-800" {...props}>
     {children}
   </button>
  )
}

export default Button