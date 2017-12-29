import { routerActions } from 'react-router-redux'
import { counterActions } from './counter'

export default {
  ...counterActions,
  ...routerActions,
}
