import React from 'react'
import Button from '../UI/Button'
import styles from './Navbar.module.css'
import {BsFillCartFill} from 'react-icons/bs'



const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>FOOD ORDER</h1>
      <Button  classes={styles.cartButton}>
      <BsFillCartFill /> &nbsp; &nbsp; &nbsp; YOUR CART
      </Button>
    </div>
  )
}

export default Navbar