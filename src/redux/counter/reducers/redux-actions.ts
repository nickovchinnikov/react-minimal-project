import { createActions, handleActions, combineActions } from 'redux-actions';

export interface IState {
  counter: number
}

export interface IPayload {
  amount?: number
}

const defaultState: IState = { counter: 0 };

export const Actions = createActions({
  inc: (amount: number = 1) => ({ amount }),
  dec: (amount: number = -1) => ({ amount })
});

const { inc, dec } = Actions

const reducer = handleActions<IState, IPayload>(
  {
    [combineActions(inc, dec).toString()]: (
      state,
      { payload: { amount = 1 } }
    ) => ({ ...state, counter: state.counter + amount })
  },
  defaultState
);

export default reducer;