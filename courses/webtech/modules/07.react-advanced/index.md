---
duration: 3 hours
---

# Advanced React

React has a lot of features to build performant client-side applications. The best way to learn React is by referring to the [official documentation](https://reactjs.org/docs/getting-started.html). In this module, we cover two important technologies which are necessary to be integrated to build a Single Page Application. These concepts are:

1. [React Context](#react-context)
2. [React Router](#react-router) (an external library)

## React Context

When React applications grow and gain more additional complexity, sharing data between the components and updating the comportant in sync with new values become cumbersome. Traditionally, there were solutions to circumvent such as [React Redux](https://react-redux.js.org/) and [MobX](https://mobx.js.org/react-integration.html). The recent addition of the [Context API](https://reactjs.org/docs/context.html) in React simplifies state management.

### State in components

This is how a state is used without a React context.

```js
// Child component
const Greeting = ({user}) => {
  return (
    <span>Hello (user ? {user.username} : 'anonymous')</span>
  )
}

// Intermediate component
const Box = ({user}) => {
  return (
    <Greeting user={user} />
  )
}

// Parent component
const Counter = ({props} => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Box user={user} />
      <button onClick={(e) => setUser('david')}>Login</button>
    </div>
  )
})
```

### Why

* Share data at all levels of the application
* Solve the problem of "prop drilling"
* Leverage existing hooks such as `useState`
* Centralize state management

### Prop drilling

* Passing properties through the component hierarchy
* From the top to all levels of the tree to the component needing it
* Not all components need those properties
* Pass access to modify the value of those properties

### Before

```
<RootComponent>                  (context key=value)
  <IntermediateComponent>        (context key=value)
    <OtherIntermediateComponent> (context key=value)
      <ChildComponent>           (context key=value)
```

### After

```
<RootComponent>                  (context key=value)
  <IntermediateComponent>                 |
    <OtherIntermediateComponent>          |
      <ChildComponent>           (context key=value)
```

### API

* Instantiation with a new Context
* One Context.Provider
* Multiple Context.Consumer
* Consumers may use the `useContext(context)` hook

### Example - Context initialization

The `Context.js` file:

```jsx
import React, {useState} from 'react'

const Context = React.createContext()

export default Context

export const ContextProvider = ({
  children
}) => {
  const [user, setUser] = useState(null)
  return (
    <Context.Provider value={{
      user: user,
      login: (user) => {
        if(user && !user.email){
          throw Error("Invalid user")
        }
        setUser(user)
      },
      logout: () => {
        setUser(null)
      }
    }}>{children}</Context.Provider>
  )
}
```

### Example - Provider registration

The `App.js` file:

```jsx
...
import {ContextProvider} from './Context'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Example - Child component with a consumer hook


```js
import {useContext} from 'react';
import {Context} from './Context'

const LoggedOut = () => {
  const {login} = useContext(Context)
  return (
    <button onclick={()=>{ login('guest') }}>Login</button>
  )
}

const LoggedIn = () => {
  const {user, logout} = useContext(Context)
  return (
    <div>
      Welcome {user}
      <button onclick={()=>{ logout() }}>Logout</button>
    </div>
  )
}

const Login = () => {
  const {user} = useContext(Context)
  return user ? <LoggedIn /> : <LoggedOut />
})

export default Login
```

## React Router

SPA stands for Single Page Application. It literally means an application that consists of one HTML page. To the end-user, the application feels like it is made of multiple pages. However, looking at the navigation bar, the address remains the same... unless the browser history is modified.

[React Router](https://reactrouter.com/) is a client and server-side routing. library for React.

### Introduction

* Show different screens to different addresses
* Honors the browser history
* User bookmarks
* Not build-in in React
* Libraries includes React Router, Reach Router, Next.js
* React Router 5 is the fusion of React Router and Reach Router

### Features

* URL parameters
* Route nesting
* Code splitting
* Redirect
* Preventing Transitions
* No match (404)
* Recursive Paths
* Animated Transitions

### Example - URL parameters

* placeholders in the URL that begin with a colon
  ```jsx
  export default () => (
    <Router>
      <Route path="/user/:id" element={<Child />} />
      <Route path="/" element={<Home />} />
    </Router>
  )
  ```

### Resources

* [React Router homepage](https://reactrouter.com/)
* [The Future of React Router and @reach/router](https://reacttraining.com/blog/reach-react-router-future/)
