
# Lab

OAuth2 and OpenID Connect enable the delegation of authorization to an external service not managed by our application. [Dex](https://dexidp.io/) can even delegate the authentication to multiple connectors, an LDAP/AD directory, or another OAuth provider like GitHub, thus acting like a federated OpenID Connect provider.

Using OAuth2 and OpenID Connect, we don't have to manage the security endpoints related to our application including account creation, login form, password retrieval, DDoS attacks, and many more. It also provides us with an authentication mechanism where no password is being sent to us.

## Objectives

1. Learn OAuth and OpenID Connect concepts (easy level)
2. Pass the OAuth tutorial (medium level)
3. Integration OAuth (hard level)

## 1. Learn OAuth and OpenID Connect concepts (easy level)

It is recommended to start by watching the excellent video [*An Illustrated Guide to OAuth and OpenID Connect*](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) (about 16 minutes) to refresh your memory.

Then, there are 2 articles that clarify and cover the [basics of OpenID Connect](https://www.adaltas.com/en/2020/11/17/oauth-openid-connect-intro/) and how to [integrate it with your public Application](https://www.adaltas.com/en/2020/11/20/oauth-microservices-public-app/). The latter comes with a [functional application](https://github.com/adaltas/node-openid-cli-usage/) from which you shall get inspiration by reading its source code.

Read those articles carefully. You will apply the steps of the second article in the next assignment.

## 2. Pass the OAuth tutorial (medium level)

Using the [second tutorial](https://www.adaltas.com/en/2020/11/20/oauth-microservices-public-app/), install Dex and reproduce all the steps with the `npx openid-cli-usage` application using GitHub as a backend connector and PKCE since your React application is public. Don't forget to activate [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in the Dex configuration, we will need it for the next task.

## 3. Integration OAuth (hard level)

Go to the `login` component of your application. We only need to work with this component for now and we want to achieve the following:

* the first time a user enters the application, he shall be presented with a "login" button
* on clicking this button, he is redirected to our Open ID Connect provider (Dex)
* once logged with Dex, he is redirected to our application
* the application prints the content of the ID token, such as the user email, and proposes a "logout" link

In your code, you shall make use of cookies twice:

- the first time to store the code verifier, required to succeed in the authorization code challenge and token retrieval
- the second time to store the user tokens, meaning that our user is logged in and his session persistent across refresh.

Here's how your code shall behave:

1. Is there code query parameters in the URL?   
   * **no**: we are not being redirected from an OAuth server   
     2. Does cookie store the user credential?   
        * **no**: it is a new user   
          3. generate a code verifier from random bytes   
          4. place the code verifier in a cookie   
          5. generate the OAuth redirect URL   
          6. propose the user to click on the redirect URL   
        * **yes**: the user is already logged in, great, it is working   
          11. print the user email information   
   * **yes**: we are coming from an OAuth server   
     7. get the code verifier from the cookie as well as the code query parameter   
     8. retrieve the tokens from the OAuth server   
     9. persist the token inside a session   
     10. redirect to the same page without any extra query parameters (shall bring us to step 11)   
