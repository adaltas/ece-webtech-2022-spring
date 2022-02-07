
# Web Technologies

This is the source code supporting our course. It contains the course information as well as its supporting labs.

## Modules

0. Prerequisites
1. Node.js introduction
2. Web application framework - Express.js
3. Databases and storage
4. Building interfaces with React
5. Material Design and Material UI
6. OAuth and OpenID Connect
7. Advanced React

## Assignment

The course assignment is consist of:

1. Participation
2. Project
3. MCQ exam (multiple choice questions)

## Usage

### Reading slides' content

Navigate inside the [`./courses/webtech`](courses/webtech) folder to read the raw material and access the labs. The module's folders contain following files:

- `index.md` - materials for the module
- `slides.pdf` - PDF slides
- `lab.md` - labs description
- `homework.md` - homework description
- `assets` folder - assets provided for the labs
- `image` folder - images used in the `.md` files

### Access online slides

The slides are available on Netlify as a static website - [ece-webtech-2021-fall.netlify.app](https://ece-webtech-2021-fall.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/e146f163-e0eb-4178-8cd0-44555b8dd8b8/deploy-status)](https://app.netlify.com/sites/ece-webtech-2021-fall/deploys)

### Build slides locally as a static website

Run the following commands to get the site up and running.

```
# Clone the repository
git clone https://github.com/adaltas/ece-webtech-2021-fall.git webtech
cd webtech/gatsby
# Download the dependencies
npm install
# Start the development server
npm run develop
# If you have problem, try
npm run clean && npm run develop
```

## Author

Sergei Kudinov   
sergei@adaltas.com   
at [Adaltas](https://www.adaltas.com/)
