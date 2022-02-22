
# Lab

We will practice with the integration of [MUI (formerly Material-UI) components](https://mui.com/components/) into our Chat application.

## Objectives

1. Learn with Video (easy level)
2. React form components (medium level)
3. React layout/navigation components (hard level)

## 1. Learn with Video (easy level)

Start by watching a few videos. The playlist [Google Design Tutorials](https://material.io/blog/google-design-tutorial-video) (available inside the first video) proposes short videos of 3 to 5 minutes each. Pick up the one you wish. Then, watch the [introduction to MUI](https://www.youtube.com/watch?v=pHclLuRolzE&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr) which is 16 minutes long.

## 2. React form components (medium level)

The new version of the Chat application comes with a "login" screen. Customize it to use nice form inputs and a button from the [MUI components](https://mui.com/components/) list.

Note, to switch from the "login" to the "channel" view, a user should simply click on the "login" button.

## 3. React layout/navigation components (hard level)

Once a user has logged in, it would be nice to adjust the UI according to the screen size. While it makes sense to always display the list of channels on the right side on a desktop screen, it is unworkable on a small screen size such as the one of a phone.

For a small screen, the channel list shall be hidden until a "menu" icon is clicked. It must then appear in the form of a drawer. The MUI library provides a "drawer" component that comes in multiple flavors. The responsible drawer seems to correspond to our need, integrate it between the `Channel`, `Channels`, and `Main` components of the application.
