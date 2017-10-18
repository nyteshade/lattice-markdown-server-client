# lattice-markdown-server-client

## Overview
This boiler plate consists of two differnt sets of boiler plate generated and
linked together to provide a GraphQL/Lattice/Express server piece that serves
markdown content via its schema/graph and a `create-react-app` client piece
that provides a sensible starting place and a few components to render the
markdown served from the server.

## Details
The client uses the `ApolloClient` to query the server piece and distribute
results to the `MDEntry` compoenent as a prop. The `MDEntry` component has
is slight wrapper around `react-remarkable` that consumes and places the
markdown content from GraphQL inside a div wherever it is so requested to do
so.

### Caveats
This process of reading markdown and serving it via GraphQL/Lattice is not at
all considered to be an optimized experience. Neither is there any central
store for use (from `mobx` or `redux`), nor any routing (ala `react-router`
or the like).

If you want to build on this project and use it for as markdown serving process,
I would recommend that you start with the following

 * Make the content location process more robust and asynchronous
 * Move the content to a database or more robust store; preferably something that supports metadata about the content (i.e. file name or title or the like)
 * Add either `redux`, `mobx` or some variant thereof

### Development Notes re/the Apollo Client
One of the things I struggled with early on when working with the Apollo Client
and this demo app was figuring out how to use a prop of a component as a value
for the GraphQL query I intended to send. To this end, there are two important
parts to take note of.

 1. The query should define the parameters, and typically be named; this was done in my example by specifying `@graphql("query getPage($content: String) {...`
 2. The second part is to define a getter named "variables". This should return the programmatically determined variables for the query. i.e. `get variables() { return {content: this.props.content} }`


