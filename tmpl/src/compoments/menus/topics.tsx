import * as React from 'react'

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Topics extends React.Component<{}, {}> {
  render () {
    return <h1>Topics</h1>
  }
}
