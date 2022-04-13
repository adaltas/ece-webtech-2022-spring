
# Project instructions

## Deadline

...

## Introduction

The project creates a Chat application similar to Discord, WhatApps, or Keybase with a minimal set of features. The user can securely create and manage channels, invite friends and post messages in a secure manner. By the end, the user will be able:

* To authenticate itself using an external provider with OAuth/OIDC.
* Navigate through his channels and the messages associated with the current channel.
* Share the channel access with other users.
* Access the channel to which he was invited.
* Send new messages.
* Edit and remove **his** messages.
* Use the user [Gravatar](https://en.gravatar.com/) if any or provide a default randomly generated Gravatar, choose an avatar proposed by the application, and upload his avatar.
* Modify his settings.
* Trust the Chat application because it is secured and the resource access is verified.

## Delivery

The following requirements **must be strictly followed**:

* Continue working in the same GitHub repository that you used for the lab works. **Don't create any other repositories!**
* The repository must be PRIVATE and you must give your teacher access to it.
* It must contain the `packages` folder with at least 3 folders inside:
  * `back-end` - the back-end API
  * `front-end` - the front-end application
  * `dex` - the Dex configuration
* Use the [README-TEMPLATE.md](./README-TEMPLATE.md) file as a template for your own readme.
* The readme must include the tasks you did with your **comments and self-evaluation**:
  * **Comments** describes what you have done, why and how you implement features, instructions, recommendations, important notes... **All must be concise**. The goal is to provide the maximum of context for the correction while accelerating the reviewing process.
  * **Self-assessment** serves to assist the teacher in evaluating the projects, it should be objective.
* The project must be a **professional** grade. You must think about everything expected from a project in production including securing sensitive information, error management, environment variables...

It is allowed to import the default application provided in the [correction repository](./README.md#supporting-materials-corrections) and start from there, however it is recommended to continue working on the project used for the lab works.

## Evaluation

* Each [task](#task) is associated with a grade that is provided for information and which might be adjusted. Be sure to respect the instructions. If any doubts, **post an issue** on the [course GitHub repository](https://github.com/adaltas/ece-webtech-2022-spring/).
* Any **plagiarism will be penalized** with a 0 and a warning.
* You are provided with a working project. The final project must be working as well. No correction will be made on a project which does not start.
* It is forbidden to:
  * Use any alternative framework to React (eg Vue.js, Angular, ...).
  * Use any alternative storage to LevelDB unless it is a sorted key-value store or a column family store.
  * Use any existing available front-end layout templates (but you can get inspiration from them).

## Tasks

Note, you do not have to complete all tasks, do your best, and don't hesitate to ask questions. Some tasks are much easier than expected.

**Project management:**

* Naming convention
  * Points: 2
  * Level: easy
  * Respect of the community conventions and best practices, consistency.
* Project structure
  * Points: 2
  * Level: easy
  * Simplicity and comprehensiveness, files/services/components organization.
* Code quality
  * Points: 4
  * Level: easy
  * Indentation, understandability, lint usage and validation, line spacing.
* Environment variables
  * Points: 2
  * Level: easy
  * Define and use environment variables in endpoint configurations and sensitive information. Configure them with [Dotenv](https://www.npmjs.com/package/dotenv) or with Docker Compose.
* Design, UX
  * Points: 4
  * Level: medium
  * Overall look and feel, user experience (UX), material-ui and graphical components, CSS styling
* Git and DevOps
  * Points: 6
  * Level: hard
  * Proper commit history, branch usage, merge versus rebase, squashing bad commits, unit tests, CI/CD (eg run unit tests with GitHub Actions and deploy to Heroku or Netlify), linter integration, Docker and Docker Compose, ...

**Application development:**

* Welcome screens
  * Points: 2
  * Level: easy
  * Make the welcome screens when a new user arrives inside the website and after they log in to be friendly, good-looking, informative, and with a call-to-action. Refer to other services on the web to take inspiration and provide relevant information about the service. This task is mostly about content editing and design. The [Buttercup](https://buttercup.pw/) homepage is a good example. Prototype your design first in a graphical editor like [Gravit Designer](https://www.designer.io/en/), then code it.
* New channel creation
  * Points: 6
  * Level: hard
  * Insert a new action (eg a button) allowing the creation of a new channel, display the form (eg popup, screen) with the channel properties (eg name, members, ...), propose to cancel or send the form, and persist the channel in the database.
* Channel membership and access
  * Points: 4
  * Level: medium
  * Every request sent to the API server (back-end) must contain the user access token in the HTTP header with its identity (email). Once the token is validated by the authentication middleware, the user ID must be associated with the created channel (eg `owner` property). If the user does not yet exist in the database, he must be created automatically.
* Resource access control
  * Points: 4
  * Level: medium
  * A user must only gain access to the channel he created or to the channels he was invited to. The APIs must return the appropriate channels. It must also prevent unexpected access and intrusion attempts. The HTTP response must return an appropriate HTTP response code and message.
* Invite users to channels
  * Points: 6
  * Level: hard
  * A channel can have one to multiple members, the creator being the first member. It is possible to invite new members either at the channel creation or later.
* Message modification
  * Points: 2
  * Level: easy
  * Once a message is sent and shared, only the message author must be able to modify its content.
* Message removal
  * Points: 2
  * Level: easy
  * Once the message is sent and shared, the message author must be able to remove it.
* Account settings
  * Points: 4
  * Level: medium
  * Create a screen for the user to modify his/her personal settings (email, name, language, theme, ...). Those properties don't have to be active. The goal is to display form components, persist their value, and load the form components with new values. For example, a switch component to select between a day and night theme illustrates how to use the switch component. On save, the value must be persisted and the switch component must reflect it. You don't have to update the overall theme UI to reflect this value. If you do, it is part of the bonus and you must mention it in the readme.
* Gravatar integration
  * Points: 2
  * Level: easy
  * [Gravatar](https://en.gravatar.com/) is a service that associates your email with an image you upload. Other services may then refer to it. Some people choose a photo of themself, others use an abstract image. It is part of the tech culture and services such as GitHub and NPM.js use it. You can use an existing component or build your own, it is very easy to integrate and it will provide a default random image if the user email is not registered.
* Avatar selection
  * Points: 4
  * Level: medium
  * Provide the user with the possibility to choose an avatar from a selection you provide. The screen presenting this selection can be proposed once the user logged in for the first time (when the user account was not yet present inside the database and was created) or when the user edits his/her settings.
* Personal custom avatar
  * Points: 6
  * Level: hard
  * Offer the user the ability to upload his avatar in the form of an image (eg PNG, SVG, ...). Ideally, the form must support drag and drop, filter the file type and restrict the file size.

## Bonus ideas

* Real-time notification with [Socket.io](https://socket.io/).
* Advanced authorization such as declaring a user as an administrator with extended permissions to remove any channels, add users, ...
* Smiley integration in the messages.
* Replace LevelDB with a scalable and distributed alternative (Cassandra, HBase, ...).
* Any feature of your liking.

Bonuses are expected to be proposed if a large majority of the tasks are implemented. Communicate about the bonuses inside the readme file to inform about their existence and usage.
