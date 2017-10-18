import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'

import styles from './App.css';

import MDEntry from '../MDEntry'
import Header from '../SampleHeader'

/**
 * Sample Application that uses the ApolloProvider to inject GraphQL results
 * into sub components that make queries. The sample MDEntry component, looks
 * up content via a GraphQL query.
 *
 * The content is backed by a `.md` or Markdown file on the server.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <ApolloProvider client={this.client}>
        <div class={styles.App}>
          <Header/>

          <MDEntry content="intro"/>
        </div>
      </ApolloProvider>
    );
  }

  /**
   * Fetches the instance of the ApolloClient used to connect to the GraphQL
   * server. There should only ever be a single instance.
   *
   * @readonly
   * @memberof App
   */
  get client() {
    return this.constructor.client;
  }

  /**
   * Fetches the instance of the ApolloClient used to connect to the GraphQL
   * server. There should only ever be a single instance.
   *
   * @readonly
   * @memberof App
   * @static
   */
  static get client() {
    let client = this[Symbol.for('apollo-client')];

    if (!client) {
      client = this[Symbol.for('apollo-client')] = new ApolloClient();
    }

    return client
  }
}

export default App;
