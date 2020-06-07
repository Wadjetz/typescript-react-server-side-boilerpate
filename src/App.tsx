import * as React from "react"
import { StyleSheet, css } from "aphrodite"

export function App() {
  return <div className={css(styles.container)}>Hello World</div>
}

const styles = StyleSheet.create({
  container: {
    color: "red"
  }
})
