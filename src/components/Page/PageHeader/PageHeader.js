import React from 'react'
import { Link } from 'gatsby'
import styles from './PageHeader.module.scss'

const PageHeader = () => (
  <header className={styles.PageHeader}>
    <nav>
      <Link className={styles.navLink} to="/">
        L'Oven Logo Here
      </Link>
    </nav>
  </header>
)

export default PageHeader
