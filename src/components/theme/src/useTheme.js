import React from 'react'
import ThemeContext from './ThemeContext'
import defaultTheme from './default-theme'

/**
 * `useTheme()` hook for functional components.
 * Access the theme object inside ReactComponents
 */
const useTheme = () => {
  // TODO: Test this condition
  return React.useContext(ThemeContext) || defaultTheme
}

export default useTheme
