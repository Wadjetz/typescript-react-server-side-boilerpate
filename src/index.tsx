import express from "express"

import { StyleSheetServer } from "aphrodite"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import { App } from "./App"

const app = express()

export function renderTemplate(html: string, css: string) {
  return `
    <html>
      <head>
        <style data-aphrodite>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
}

const { html, css } = StyleSheetServer.renderStatic(() => ReactDOMServer.renderToString(<App />))

const template = renderTemplate(html, css.content)

app.get("/", (_, res) => res.send(template))

app.listen(8800, () => console.log("App listening on port 8800!"))
