import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Markdown from 'react-remarkable'
import styles from './MDEntry.css'

/**
 * A component that reads a Markdown page from GraphQL and renders it in its
 * own div. It expects a property named `content` which is the name/path of
 * server side content.
 *
 * @export
 * @class MDEntry
 * @extends {Component}
 */
@graphql(gql`
  query getEntry($content: String!) {
    getPage(content: $content) {
      content,
      date,
      size
    }
  }
`)
export class MDEntry extends Component {
  /**
   * These are the variables denoted in the query. They come from props
   * specified on the component itself.
   *
   * @readonly
   * @memberof MDEntry
   */
  get variables() {
    const { content } = this.props;
    return { content }
  }

  /**
   * Renders the GraphQL content surrounded by a div with a class name
   * matching that of the Class. If this class is extended, the new name
   * will be the name of the class that will be used to style the content.
   *
   * Note that the class name plus `"NoData"` will be applied when, and if,
   * there is no content currently available to render. Typically this
   * happens when there is no content.
   *
   * @returns
   * @memberof MDEntry
   */
  render() {
    let { data } = this.props
    let className = this.constructor.name

    if (!data || !data.getPage) {
      return this.renderNoData();
    }

    return (
      <div class={styles[className]}>
        <Markdown source={data.getPage.content} />
      </div>
    )
  }

  /**
   * When there is no query data in the injected Apollo data variable, the
   * renderNoData() method is called. This makes it easy for subclassing or for
   * HOCs to be used.
   *
   * @returns
   * @memberof MDEntry
   */
  renderNoData() {
    let className = this.constructor.name

    return (
      <div class={styles[`${className}NoData`]}>
        <Markdown source="*Fetching...*"/>
      </div>
    )
  }
}

export default MDEntry
