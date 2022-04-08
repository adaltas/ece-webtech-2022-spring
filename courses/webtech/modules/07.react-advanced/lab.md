
# Lab

## Objectives

1. Store the application data using React Context
2. Provide routes with React Router

# 1. Store the application data using React Context

The React Context API will simplify how to share data between multiple parts of our application.

We will store the user information inside a context. Create a Context Provider and wrap your application with it. Use the `setOauth` or `setUser` exported by the Provider to share the tokens returned by the OpenId Connect server. Use the `oauth` or `user` exported by the Context in the different sections of your application to display the user information or to get access to the access token. Other properties such as the list of channels are good candidates.

## 2. Provide routes with React Router

The React Router API dispatches the user navigation by connecting the page history and URLs to React components.

The lab activates React Router inside the application. The user shall be able to navigate to the channels just by entering a URL and by clicking on the history buttons of the browser.
