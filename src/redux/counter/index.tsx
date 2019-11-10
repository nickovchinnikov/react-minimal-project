import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import { Counter } from './components'
import counter, { Actions } from './reducers'

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootEl = document.getElementById('root')

export const CounterApp = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: Actions.INC })}
    onDecrement={() => store.dispatch({ type: Actions.DEC })}
  />,
  rootEl
)

store.subscribe(CounterApp)
