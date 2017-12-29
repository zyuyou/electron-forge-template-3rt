import * as React from 'react'

// import PropTypes from 'prop-types';

export interface ICounterProps {
  value: number
  onIncrement: any
  onDecrement: any
}

export class Counter extends React.Component<ICounterProps, {}> {
  public render () {
    const {value, onIncrement, onDecrement} = this.props
    return (
      <div>
        <p>
          <span> Counter: {value} </span>
          <button onClick={onIncrement}>Increase</button>
          <button onClick={onDecrement}>Decrease</button>
        </p>
      </div>
    )
  }
}
