import React from 'react'
import styles from './PageFooter.module.scss'

const PageFooter = () => (
  <footer className={styles.PageFooter}>© {new Date().getFullYear()}</footer>
)

export default PageFooter
