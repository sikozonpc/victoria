import React from 'react'
import defaultTheme from './default-theme'

const ThemeContext = React.createContext(defaultTheme)

const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext

export default ThemeContext
export { ThemeProvider, ThemeConsumer }
