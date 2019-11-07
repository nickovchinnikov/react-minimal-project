export enum Actions {
  INC = 'INCREMENT',
  DEC = 'DECREMENT'
}

export interface IActionIncDec {
  type?: Actions
}

export default (state = 0, action: IActionIncDec) => {
  const { type } = action
  
  switch (type) {
    case Actions.INC:
      return state + 1
    case Actions.DEC:
      return state - 1
    default:
      return state
  }
}
