import counter, { Actions } from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: Actions.INC })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(1, { type: Actions.DEC })).toBe(0)
    })

    it('should ignore undefined actions', () => {
      expect(counter(1, {})).toBe(1)
    })
  })
})
