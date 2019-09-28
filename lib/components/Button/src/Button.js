import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withTheme } from '../../theme/index'

/**
 * Button component
 */
const Button = (props) => {
  const {
    children,
    className,
    theme,
    disabled,
    variant = 'contained',
    color = 'default'
  } = props
  console.log(props)

  /** default styles */
  // TODO: Add typings
  const styles = {
    root: {
      position: 'relative',
      fontFamily: theme.typography.text['600'],
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      backgroundColor: theme.palette.secondary.base
    },
    text: {

    },
    contained: {

    },
    outlined: {

    }
  }

  const themedClassName = 'ThemedClassName'

  // TODO: create a style applier thingy - RESEARCH

  return (
    <button
      className={cx(
        themedClassName,
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
   * Classes
   */
  className: PropTypes.string,
  /**
   * Style to be applied according to the button function in
   * the design.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * Variant of the button.
   */
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']),
  /**
   * Disable the button
   */
  disabled: PropTypes.bool
}

export default withTheme(Button)
