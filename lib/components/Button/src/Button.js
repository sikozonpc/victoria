import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withTheme } from '../../theme/index'

/** styles */
const styles = (theme) => ({
  base: {
    position: 'relative',
    fontFamily: theme.typography.text['600'],
    // fontWeight: theme.typography.,
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  text: {

  },
  contained: {
    padding: '10px 15px',
    backgroundColor: theme.palette.default.base
  },
  outlined: {

  },
  primary: {
    backgroundColor: theme.palette.primary.base
  },
  secondary: {
    backgroundColor: theme.palette.secondary.base
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

  return (
    <button
      className={cx(
        classes.base,
        {
          [classes.disabled]: disabled,
          [classes[variant]]: variant,
          [classes[type]]: type
        },
        className
      )}
      style={styles.root}
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
