import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Container.module.scss'

const Container = ({
  backgroundImageSource,
  children,
  className,
  isFullViewportHeight,
}) => {
  // See https://css-tricks.com/tinted-images-multiple-backgrounds/ for explanation
  const darkOverlay =
    'linear-gradient(rgba(33, 48, 69, 0.65),rgba(33, 48, 69, 0.65))'
  const dynamicBackgroundImage = backgroundImageSource
    ? {
        backgroundImage: `${darkOverlay}, url(${backgroundImageSource})`,
      }
    : {}

  return (
    <div
      className={classNames(className, styles.Container, {
        [styles.fullViewportHeight]: isFullViewportHeight,
      })}
      style={dynamicBackgroundImage}
    >
      <div className={styles.content}>{children}</div>
    </div>
  )
}

Container.propTypes = {
  backgroundImageSource: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isFullViewportHeight: PropTypes.bool,
}

Container.defaultProps = {
  backgroundImageSource: undefined,
  children: undefined,
  className: undefined,
  isFullViewportHeight: false,
}

export default Container
