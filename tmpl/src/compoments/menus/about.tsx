import * as React from 'react'

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class About extends React.Component<{}, {}> {
  render () {
    return <h1>About</h1>
  }
}
