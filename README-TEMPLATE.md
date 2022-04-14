
# Webtech Chat application - project

*presentation, introduction, ...*

## Usage

*how to start and use the application, run the tests, ...*

* Clone this repository, from your local machine:
  ```
  git clone https://github.com/adaltas/ece-webtech-2021-fall.git webtech
  cd webtech
  ```
* Register your GitHub application, get the `clientID` and `clientSecret` from GitHub and report them to your Dex configuration. Modify the provided [Dex configuration file](./packages/dex/config.yml) to look like:
  ```yaml
  ...
  - type: github
    id: github
    name: GitHub
    config:
      clientID: xxxx98f1c26493dbxxxx
      clientSecret: xxxxxxxxx80e139441b637796b128d8xxxxxxxxx
      redirectURI: http://localhost:5556/dex/callback
  ...
  ```
* Run [Dex](https://dexidp.io/)
  * In a Docker container:   
    ```bash
    docker compose up
    ```
  * Locally:   
    Install [Go](https://golang.org/) and [Dex](https://dexidp.io/docs/getting-started/). For example, on Ubuntu, from your project root directory:   
      ```bash
      # Install Go
      apt install golang-go
      # Download Dex
      git clone https://github.com/dexidp/dex.git
      # Build Dex
      cd dex
      make
      make examples
      ```
    * Now, that Dex is built and configured, you can start the Dex server:   
      ```bash
      dex serve ./packages/dex/config.yaml
      ```
* Start the `back-end`
  ```bash
  cd packages/back-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Optional, fill the database with initial data
  yarn init
  # Start the back-end
  yarn start
  ```
* Start the `front-end`
  ```bash
  cd packages/front-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Start the front-end
  yarn start
  ```

## Author

*name, email, group*

## Tasks

**Project management:**

* Naming convention
  * Self-evaluation:
  * Comments:
* Project structure
  * Self-evaluation:
  * Comments:
* Code quality
  * Self-evaluation:
  * Comments:
* Environment variables
  * Self-evaluation:
  * Comments:
* Design, UX
  * Self-evaluation:
  * Comments:
* Git and DevOps
  * Self-evaluation:
  * Comments:

**Application development:**

* Welcome screens
  * Self-evaluation:
  * Comments:
* New channel creation
  * Self-evaluation:
  * Comments:
* Channel membership and access
  * Self-evaluation:
  * Comments:
* Ressource access control
  * Self-evaluation:
  * Comments:
* Invite users to channels
  * Self-evaluation:
  * Comments:
* Message modification
  * Self-evaluation:
  * Comments:
* Message removal
  * Self-evaluation:
  * Comments:
* Account settings
  * Self-evaluation:
  * Comments:
* Gravatar integration
  * Self-evaluation:
  * Comments:
* Avatar selection
  * Self-evaluation:
  * Comments:
* Personal custom avatar
  * Self-evaluation:
  * Comments:

## Bonus

* Title
  * Self-evaluation:
  * Comments:
* ...
