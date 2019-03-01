import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.module.scss';

const Heading = ({ className, tag, text, withUnderline }) => {
  const HeadingTag = tag;

  return (
    <HeadingTag
      className={classNames(styles.Heading, className, {
        [styles.underline]: withUnderline,
      })}
    >
      {text}
    </HeadingTag>
  );
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  text: PropTypes.string.isRequired,
  withUnderline: PropTypes.bool,
};

Heading.defaultProps = {
  withUnderline: false,
};

export default Heading;
