# Victoria

<div align="center">
    <img alt="styled-components" src="./victoria-logo.png" height="150px" />
</div>

<br />

<div align="center">
  <strong>✨(WIP) React Component design system built with acessability and flexability in mind ✨.</strong>
  <br />
  <br />
</div>

<br />

## Development

This project primarily uses StorybookJS for development.

### Quick Start

1. `git clone git@github.com:sikozonpc/victoria.git`
1. `yarn`
1. `yarn dev`

### Creating components

Make a new folder in the components folder, make sure the folder name is unspaced and Pascal Case (ExampleComponentName). Create a JS file with the same folder name (or appropriate variation).

Requirements

- Documented PropTypes and default props.
- Storybook examples are labeled with a `.story.js` filename.

### Project Structure

The goal is to keep the package as lightweight and minimal as possible, so there's not much to it. If you look at the `package.json`, you'll see a few dev dependencies like Babel, React, and Storybook.

In terms of actual dependencies, we only have React-JSS, since it's used in the actual components. React and react-dom are peer-deps (since the project's using this will be react-based).

#### Folder Structure
- lib/
  - /components/
  - /components/ComponentName/
  - /components/ComponentName/ComponentName.js
  - /components/ComponentName/ComponentName.stories.js - stories of the component
  - /components/ComponentName/ComponentName.test.js - unit tests
  - /components/ComponentName/index.js - contains exports of all components in folder
  - .babelrc - env and react Babel presets.


### High Priority

- More components

### Low Priority

- Integrate Jest + Storybook for testing

### Thoughts

- Install Lerna to manage sub-packages, allowing users to install specific components (maybe separate branch?)
