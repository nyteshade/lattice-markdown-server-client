import { GQLBase, Schema, Properties, resolver } from 'graphql-lattice'
import fs from 'fs'

@Schema(/* GraphQL */`
  type Page {
    content: String
    date: String
    size: Int
  }

  type Query {
    getPage(content: String): Page
  }
`)
@Properties('content', 'date', 'size')
export class Page extends GQLBase {
  @resolver getPage(requestData, {content}) {
    if (!/\.md\s*$/i.test(content)) {
      content += ".md";
    }

    const data = fs.readFileSync(global.fromRoot('content', content));

    if (content) {
      return new Page({
        content: data.toString(),
        date: new Date().toString(),
        size: data.toString().length
      })
    }

    return null;
  }
}
