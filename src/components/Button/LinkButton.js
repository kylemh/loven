import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

class LinkButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isFullWidth: PropTypes.bool,
    theme: PropTypes.oneOf(['primary', 'secondary']),
    to: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
    isFullWidth: false,
    theme: 'primary',
    to: undefined,
  };

  clickHandler = () => {
    const { props } = this;

    props.onClick();
  };

  render() {
    const { props } = this;

    return (
      <Link
        className={classNames(
          styles.Button,
          props.className,
          styles[props.theme],
          {
            [styles.disabled]: props.disabled,
            [styles.isFullWidth]: props.isFullWidth,
          }
        )}
        to={props.to}
      >
        {props.children}
      </Link>
    );
  }
}

export default LinkButton;
