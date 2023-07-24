import React from 'react'
import styles from './Button.module.css'
const Button = ({classes, children, onClick}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${classes}`}>{children}</button>
  )
}

export default Button