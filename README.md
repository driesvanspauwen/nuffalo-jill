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

# Server
To run the server in development mode, use
```bash
npm --prefix server run strapi develop
```
(See https://docs.strapi.io/dev-docs/cli for a full guide on the CLI of Strapi, where you can find other running modes)

# Client
The client is a Next.js app that is installed with the following options:
- Typescript: no
- ESLint: yes
- Tailwind CSS: no
- App Router: yes

To run the client in development mode, use
```bash
npm --prefix client run dev
```