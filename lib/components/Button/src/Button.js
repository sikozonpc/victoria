import React from 'react'
import PropTypes from 'prop-types'

/** default styles */
const styles = {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
}

/**
 * A Button component
 */
const Button = (props) => {
  const { children } = props

  return <button {...styles}>{children}</button>
}

Button.propTypes = {
  /**
   * The content of the button
   */
  children: PropTypes.node,
}

export default Button
