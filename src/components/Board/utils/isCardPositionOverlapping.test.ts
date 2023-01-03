import { isCardPositionOverlapping } from './isCardPositionOverlapping'

describe('isCardPositionOverlapping', () => {
  describe('when card is not overlapping', () => {
    it('returns false', () => {
      const newOffset = { left: 0, top: 0 }
      const cards = [{ transformations: { left: 100, top: 100, rotation: 0 }, id: 1, symbol: '🐶' }]
      const minCardDistance = 50

      expect(isCardPositionOverlapping(newOffset, cards, minCardDistance)).toBe(false)
    })
  })

  describe('when card is overlapping', () => {
    it('returns true', () => {
      const newOffset = { left: 0, top: 0 }
      const cards = [{ transformations: { left: 49, top: 49, rotation: 0 }, id: 1, symbol: '🐶' }]
      const minCardDistance = 50

      expect(isCardPositionOverlapping(newOffset, cards, minCardDistance)).toBe(true)
    })
  })
})
