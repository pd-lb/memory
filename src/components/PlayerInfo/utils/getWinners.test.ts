import { getWinners } from './getWinners'

describe('getWinners', () => {
  describe('when there are still cards to be matched', () => {
    it('returns an empty array of winners', () => {
      const score = [1, 2]
      const cardPairs = 5

      expect(getWinners(score, cardPairs)).toEqual([])
    })
  })

  describe('when all cards have been matched', () => {
    describe('when player 1 has more matches', () => {
      it('returns an array with player 1 as the only winner', () => {
        const score = [3, 2]
        const cardPairs = 5

        expect(getWinners(score, cardPairs)).toEqual([0])
      })
    })

    describe('when player 2 has more matches', () => {
      it('returns an array with player 2 as the only winner', () => {
        const score = [1, 4]
        const cardPairs = 5

        expect(getWinners(score, cardPairs)).toEqual([1])
      })
    })

    describe('when both players have the same number of matches', () => {
      it('returns an array with both players as winners', () => {
        const score = [3, 3]
        const cardPairs = 6

        expect(getWinners(score, cardPairs)).toEqual([0, 1])
      })
    })
  })
})
