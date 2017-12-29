import { connect } from 'react-redux'
import { Counter } from '../compoments/counter'
import { Action, Dispatch } from 'redux'
import { counterActions } from '../actions/counter'

const mapStateToProps = (state: {counter: number}) => {
  return {
    value: state.counter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onIncrement: () => {
      dispatch(counterActions.increment())
    },

    onDecrement: () => {
      dispatch(counterActions.decrement())
    },
  }
}

export const CounterContainer: any = connect(mapStateToProps, mapDispatchToProps)(Counter)
