import React from 'react'
import { ThemeConsumer } from './ThemeContext'
import getDisplayName from '../../../../utils/getDisplayName'

/**
 * HOC that consumes the theme.
 * Inspiration from Evergreen #https://github.com/segmentio/evergreen/blob/master/src/theme/src/withTheme.js
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
const withTheme = (WrappedComponent) => {
  const WithTheme = (props) => {
    return (
      <ThemeConsumer>
        {theme => <WrappedComponent theme={theme} {...props} />}
      </ThemeConsumer>
    )
  }

  WithTheme.displayName = `WithTheme(${getDisplayName(WrappedComponent)})`

  return WithTheme
}

export default withTheme
