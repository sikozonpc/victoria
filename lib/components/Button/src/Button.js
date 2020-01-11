import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withTheme, useTheme } from '../../theme/index'

/** styles */
const styles = (theme) => ({
  base: {
    position: 'relative',
    fontWeight: theme.typography.text['600'],
    fontSize: 14,
    fontFamily: theme.typography.fontFamilies.elements,
    borderRadius: 10,
    padding: '10px 20px',
    border: '2px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    cursor: 'pointer',
    textTransform: 'uppercase'
  },
  text: {
    border: 'none',
    backgroundColor: 'transparent'
  },
  contained: {
    padding: '10px 15px',
    backgroundColor: theme.palette.default.base
  },
  outlined: {
    borderColor: theme.palette.default.base,
    backgroundColor: 'transparent',
    color: theme.palette.default.base
  },
  primary: {
    backgroundColor: theme.palette.primary.base,
    color: '#fff'
  },
  secondary: {
    backgroundColor: theme.palette.secondary.base,
    color: '#fff'
  },
  disabled: {
    cursor: 'not-allowed'
  }
})

/**
 * Button component
 */
const Button = (props) => {
  const {
    children,
    className,
    disabled,
    classes,
    variant = 'contained',
    type = 'default'
  } = props

  /** theme object */
  const theme = useTheme()

  /** TODO: here gotta use classes not styles */
  const inlineStyles = {
    color: (variant === 'outlined' && type) ? theme.palette[type].base : '',
    borderColor: (variant === 'outlined' && type) ? theme.palette[type].base : ''
  }

  console.log(inlineStyles)

  /** TODO: be able to use a `a` tag as button  - aka ButtonBase */

  return (
    <button
      className={cx(
        classes.base,
        {
          [classes.disabled]: disabled,
          [classes[variant]]: variant,
          [classes[type]]: type && variant !== 'outlined',
          [className]: className
        }
      )}
      style={inlineStyles}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * Theme object from `ThemeProvider`
   */
  theme: PropTypes.object.isRequired,
  /**
   * CSS Class
   */
  className: PropTypes.string,
  /**
   * Classes object from `withTheme` styles object
   * contains an objectwith css class names generated from the styles object
   */
  classes: PropTypes.object,
  /**
   * Style to be applied according to the button function in
   * the design.
   */
  type: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * Variant of the button.
   */
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']),
  /**
   * Disable the button
   */
  disabled: PropTypes.bool
}

export default withTheme(Button)(styles)
