import { getPlayerMessage } from './getPlayerMessage'

describe('getPlayerMessage', () => {
  describe('when there are no winners yet', () => {
    it('returns appropriate for active player', () => {
      const playerIndex = 0
      const activePlayer = 0
      const winners: number[] = []

      expect(getPlayerMessage(playerIndex, activePlayer, winners)).toBe('Your turn')
    })

    it('returns no message for inactive player', () => {
      const playerIndex = 0
      const activePlayer = 1
      const winners: number[] = []

      expect(getPlayerMessage(playerIndex, activePlayer, winners)).toBeUndefined()
    })
  })

  describe('when it is a draw', () => {
    it('returns appropriate message for both players', () => {
      const player1 = 0
      const player2 = 1
      const activePlayer = 0
      const winners = [0, 1]

      expect(getPlayerMessage(player1, activePlayer, winners)).toBe("It's a draw!")
      expect(getPlayerMessage(player2, activePlayer, winners)).toBe("It's a draw!")
    })
  })

  describe('when there is a single winner', () => {
    it('returns appropriate message for winner', () => {
      const playerIndex = 0
      const activePlayer = 0
      const winners = [0]

      expect(getPlayerMessage(playerIndex, activePlayer, winners)).toBe('You win!')
    })

    it('returns no message for the losing player', () => {
      const playerIndex = 1
      const activePlayer = 0
      const winners = [0]

      expect(getPlayerMessage(playerIndex, activePlayer, winners)).toBeUndefined()
    })
  })
})
