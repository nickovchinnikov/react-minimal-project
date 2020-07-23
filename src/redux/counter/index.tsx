import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  Dispatch,
  Action
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Counter } from './components'
import counter, { Actions } from './reducers'

const reducer = combineReducers({ counter });
export type CounterAppState = ReturnType<typeof reducer>;

const logger = (store: any) => (next: Dispatch) => (action: Action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const enhancer = composeWithDevTools(
  applyMiddleware(logger)
);

const store = createStore(reducer, enhancer);

const rootEl = document.getElementById('root');

export const CounterApp = () => {
  const { counter } = store.getState();
  return ReactDOM.render(
    <Counter
      value={counter}
      onIncrement={() => store.dispatch({ type: Actions.INC })}
      onDecrement={() => store.dispatch({ type: Actions.DEC })}
    />,
    rootEl
  );
};

store.subscribe(CounterApp);
