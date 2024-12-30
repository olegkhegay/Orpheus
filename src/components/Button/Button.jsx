import React from 'react'
import s from './Button.module.scss'

const Button = ({ children, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button