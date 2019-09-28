/**
 * Returns the Wrapped React component's `displayName` property.
 * To learn more about this property checkout the offical docs:
 * #https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 * @param {React.Component} WrappedComponent - Component to get the display name.
 */
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default getDisplayName
