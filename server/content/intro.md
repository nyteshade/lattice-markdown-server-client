# GraphQL Lattice/Markdown/React boilerplate

## Overview

Welcome to the GraphQL Lattice, React and Markdown server/client boilerplate
application. The goal is to provide an easier way to demonstrate a good
starting place for both the server and client side applications.

### Server

The server portion was cloned, literally, by using the `lattice-quickstart`
application. You can clone a fresh boilerplate app for serving only your own
GraphQL Lattice server by doing the following:

```sh
git clone https://github.com/nyteshade/lattice-quickstart
```

### Client

The client was generated using a standard `create-react-app` boilerplate. The
project had `npm run eject` run upon it and then recevied the following
additions

 * babel-plugin-transform-class-properties
 * babel-plugin-transform-decorators-legacy
 * babel-preset-stage-1

## Okay, so what does it do?

The `lattice-markdown-server-client` application provides a client and server
solution that has the client querying the server for content. The server stores
this content in markdown files allowing the author to easily update and add
content to the server.

Currently the client does not use `redux` nor does it use `react-router` or
any similar solutions. These are left to the user to build upon as they see
fit.

## I have questions...

Please file a GitHub issue or reach out to the author,
[Brielle Harrison](mailto:nyteshade@gmail.com?subject=Questions%20or%20Feedback%20About%20Lattice-Markdown-Server)
