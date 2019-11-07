import counter, { Actions } from './redux-actions'

describe('redux actions reducer', () => {
  describe('counter', () => {
    it('should Actions.inc should return payload with amount', () => {
      expect(Actions.inc())
        .toEqual({
          type: Actions.inc.toString(),
          payload: { amount: 1 }
        })
    })

    it('should Actions.dec should return payload with amount', () => {
      expect(Actions.dec())
        .toEqual({
          type: Actions.dec.toString(),
          payload: { amount: -1 }
        })
    })
    
    it('should provide the initial state', () => {
      expect(counter(undefined, { type: '', payload: {} }))
        .toEqual({ counter: 0 })
    })

    it('should handle INCREMENT action', () => {
      expect(counter({ counter: 1 }, Actions.inc()))
        .toEqual({ counter: 2 })
    })

    it('should handle DECREMENT action', () => {
      expect(counter({ counter: 1 }, Actions.dec()))
        .toEqual({ counter: 0 })
    })

    it('should ignore undefined actions', () => {
      expect(counter({ counter: 1 }, { type: '', payload: { } }))
        .toEqual({ counter: 1 })
    })
  })
})
