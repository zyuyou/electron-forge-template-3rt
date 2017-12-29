export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export type Actions = {
  INCREMENT: {
    type: typeof INCREMENT,
  },
  DECREMENT: {
    type: typeof DECREMENT,
  },
}

// Action Creators
export const counterActions = {
  increment: (): Actions[typeof INCREMENT] => ({
    type: INCREMENT,
  }),

  decrement: (): Actions[typeof DECREMENT] => ({
    type: DECREMENT,
  }),
}
