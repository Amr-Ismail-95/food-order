import React from 'react'
import styles from './Home.module.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
    </div>
  )
}

export default Home