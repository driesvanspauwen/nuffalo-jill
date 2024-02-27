# nuffalo-jill
A repository for the website of Nuffalo Jill, an electoral team for the VTK elections.

The website is built with a Strapi backend and Next.js frontend. Strapi provides an admin panel that we use to create objects such as events in the election week or scores that players obtain in our game. The Strapi framework comes with a SQLite database.

# Installation
### Requirements
- NodeJS and npm, npm is included in the NodeJS installation (https://nodejs.org/en)
    - Note: The server framework (Strapi) only supports certain versions of NodeJS, make sure that you install a supported version (see the prerequisites at https://docs.strapi.io/dev-docs/quick-start)
- Python (https://www.python.org/downloads/)


### Installation guide
To install server and client dependencies, run 
```bash
npm --prefix server install
npm --prefix client install
```

To run the server and client in development mode respectively, use
```bash
npm --prefix server run strapi develop
npm --prefix client run dev
```
(See https://docs.strapi.io/dev-docs/cli for a full guide on the CLI of Strapi, where you can find other running modes)

