
# Lab

A basic React application created with [`create-react-app`](https://create-react-app.dev/) is provided in the **corrections** repository specific to your group. It is a similar application started during the class session, it runs a page with the ability to read and write messages into a channel. In this lab, you will make a few improvements.

## Objectives

1. Architecture (easy level)
2. Styles (easy level)
3. Use an external library (medium level)
4. Support message contents in Markdown (hard level)

## Before starting 🚀

Refer to the previous [before starting](../03.storage/lab.md#before-starting-) section and make sure you follow its instructions.

## 1. Architecture (easy level)

It is now the right time to reorganize/refactor our code. Split this monolithic
react Component into multiple sections. In the end, we should end up with the
following components: `Header`, `Footer`, `Main`, `Channels`, `Channel`,
`Messages`, `MessageForm`.

- `App.js` file uses `Header.js`, `Main.js`, `Footer.js`
- `Main.js` file uses `Channels.js`, `Channel.js`
- `Channels.js` prints the list of channels
- `Channel.js` prints the messages, composed of `Messages.js` and `MessageForm.js`
- `Messages.js` prints the list of messages inside the current channel
- `MessageForm.js` send a new message

```
+--------------------------------------------+
|                  Header                    |
+--------------------------------------------+
|   Channels    |          Channel           |
|               | +------------------------+ |
|               | |        Messages        | |
|               | +------------------------+ |
|               | |      MessageForm       | |
|               | +------------------------+ |
+--------------------------------------------+
|                  Footer                    |
+--------------------------------------------+
```

## 2. Styles (easy level)

Give it some styles, use CSS to make it looks good. The possible source of improvements include changing the colors, replacing the HTML "send" button with an icon, working on the header, providing day/night themes ... be creative

Note, only the dimension of the Channel component is dynamic and adjusting to the window size. The `Header`, `Footer` and `Channels` components have fixed size.

## 3. Use an external library (medium level)

Format the date in a human-readable format. While the date is generated on the server-side to ensure its relevance and prevent forgery, it must be displayed according to the user browser local. The [Moment.js](https://momentjs.com/) library has been the library of choice for many years to accomplish date formatting. Read what is displayed on the top right corner of their homepage, it is now deprecated. Read the reasons and act accordingly.

## 4. Support message contents in Markdown (hard level)

Markdown is the most popular syntax to format text into HTML. It is used by the majority of the project Readme files, to write documentation and to generate websites.

I recommend you to use the [unified](https://unifiedjs.com/) which is very powerful and comes with a lot of plugins. You can read the Markdown to HTML guide in the learn section and enrich it with your selection of relevant plugins.

Consider adding syntax highlight support with a library like [Prism](https://prismjs.com/).
