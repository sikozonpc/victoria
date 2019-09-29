import React from 'react'
import { ThemeConsumer } from './ThemeContext'
import getDisplayName from '../../../../utils/getDisplayName'
// The HOC compiles the CSS object into actual CSS and injects it
// into the app (as <style></style> elements in the <head>)
import injectSheet from 'react-jss'

/**
 * HOC that consumes the theme.
 * Inspiration from Evergreen #https://github.com/segmentio/evergreen/blob/master/src/theme/src/withTheme.js
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
const withTheme = (WrappedComponent) => (styles) => {
  let StyledComponent = WrappedComponent

  // Inject styles into the component if they are given
  if (styles) {
    StyledComponent = injectSheet(styles)(WrappedComponent)
  }

  // Passes the theme to the react-jss Theme Provider
  const WithTheme = (props) => {
    return (
      <ThemeConsumer>
        {theme => <StyledComponent theme={theme} {...props} />}
      </ThemeConsumer>
    )
  }

  WithTheme.displayName = `WithTheme(${getDisplayName(WrappedComponent)})`

  return WithTheme
}

export default withTheme
