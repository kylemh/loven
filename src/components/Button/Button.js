import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    theme: PropTypes.oneOf(['primary', 'secondary']),
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
  };

  static defaultProps = {
    className: undefined,
    disabled: false,
    isFullWidth: false,
    onClick: () => {},
    tabIndex: 0,
    theme: 'primary',
    type: 'button',
  };

  clickHandler = () => {
    const { props } = this;

    props.onClick();
  };

  render() {
    const { props } = this;

    return (
      <button
        className={classNames(
          styles.Button,
          props.className,
          styles[props.theme],
          {
            [styles.disabled]: props.disabled,
            [styles.isFullWidth]: props.isFullWidth,
          }
        )}
        disabled={props.disabled}
        onClick={this.clickHandler}
        tabIndex={props.tabIndex}
        type={props.type}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
