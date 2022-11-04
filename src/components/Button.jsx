import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6
    bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none
    leading-[24px] 
    border-[1px] border-transparent
    hover:border-blue-600 rounded-[10px] cursor-pointer transition duration-600 ease-in-out
    ${styles} `}>
      Get Started
    </button>
  )
}

export default Button