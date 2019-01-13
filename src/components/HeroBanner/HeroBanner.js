import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeroBanner.module.scss'

const HeroBanner = ({ title }) => (
  <div className={styles.HeroBanner}>
    <h1 className={styles.pageTitle}>{title}</h1>
  </div>
)

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeroBanner
