# 💊 react-mgmt

![version 1.0.1](https://img.shields.io/github/package-json/v/nicoglennon/react-mgmt.svg)

A state management trip for React.

## Getting Started

Install w/ Yarn:

```
$ yarn add react-mgmt
```

or if you prefer npm:

```
$ npm i react-mgmt
```

## Example

in `App.js`, import the `MgmtProvider` and pass it your application's initial state and (root) reducer:

```javascript
import React from 'react'
import { MgmtProvider } from 'react-mgmt'
import rootReducer from './reducers'
import initialState from './initialState'

const App = () => {
  return (
    <MgmtProvider reducer={rootReducer} initialState={initialState}>
      // your app here
    </MgmtProvider>
  )
}
```

Call the `useMgmt` hook from anywhere in your component tree to access your state obj and dispatch function:

```javascript
import React from 'react'
import { useMgmt } from 'react-mgmt'

const ToggleThemeButton = () => {
  const [{ theme }, dispatch] = useMgmt()
  return <button onClick={() => dispatch('TOGGLE_THEME')}>{theme}</button>
}
```

## API

### `MgmtProvider` (Component)

```javascript
const ExampleApp = () => {
  return (
    <MgmtProvider reducer={rootReducer} initialState={initialState}>
      // your app here
    </MgmtProvider>
  )
}
```

Wrap your top-level component with `MgmtProvider` like you would with `Context.Provider`.

| Prop           | Description                               |
| -------------- | ----------------------------------------- |
| `reducer`      | Root reducer function.                    |
| `initialState` | Initial state object of your application. |

### `useMgmt` (Hook)

```javascript
const ExampleButton = () => {
  const [{ theme }, dispatch] = useMgmt()
  return <button onClick={() => dispatch('TOGGLE_THEME')}>{theme}</button>
}
```

Call this hook from anywhere in the component tree to access (and subscribe to) `state` and/or `dispatch`.

| Return Value        | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `[state, dispatch]` | Deconstruct the `state` object if you don't wish to pull in top-level state every time. |

### `MgmtConsumer` (Component)

I didn't forget about class components! You can use `MgmtConsumer` inside your class component to access `state` and `dispatch` without using Hooks:

```javascript
class ExampleButton extends React.Component {
  render() {
    return (
      <MgmtConsumer>
        {([state, dispatch]) => (
          <button onClick={() => dispatch('EXAMPLE_ACTION')}>
            {state.exampleValue}
          </button>
        )}
      </MgmtConsumer>
    )
  }
}
```

## Credits

This package is my spin on a [Medium article](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) by Luke Hall (@lukashala).
