import React from 'react'
import styles from './Button.module.css'

function Button({ title, color, ...otherProps }) {
  return (
    <button className={`${styles.button_elem} ${styles[color]}`} {...otherProps}>{title}</button>
  )
}

export default Button