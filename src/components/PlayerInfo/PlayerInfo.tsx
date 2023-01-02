import React, { useMemo } from 'react'
import './PlayerInfo.css'

interface Props {
  activePlayer: number
  score: number[]
  cardPairs: number
}

const getMessage = (player: number, activePlayer: number, winners: number[]) => {
  if (!winners.length && player === activePlayer) {
    return 'Your turn'
  }
  if (winners.length > 1) {
    return "It's a draw!"
  }
  if (winners.includes(player)) {
    return 'You win!'
  }
}

const getWinners = (score: Props['score'], cardPairs: Props['cardPairs']): number[] => {
  const winners: number[] = []

  // if there are still cards to be matched
  if (score[0] + score[1] < cardPairs) {
    return []
  }
  if (score[0] >= score[1]) {
    winners.push(0)
  }
  if (score[0] <= score[1]) {
    winners.push(1)
  }

  return winners
}

export const PlayerInfo = ({ activePlayer, score, cardPairs }: Props) => {
  const winners = useMemo(() => getWinners(score, cardPairs), [score, cardPairs])

  return (
    <div className='player-info'>
      {[1, 2].map((_, playerIndex) => {
        const message = getMessage(playerIndex, activePlayer, winners)

        return (
          <div
            key={playerIndex}
            className={`player-${playerIndex} ${
              !winners.length && activePlayer === playerIndex ? 'active' : ''
            } ${winners.includes(playerIndex) ? 'winner' : ''}`}
          >
            <div className='player-name'>Player {playerIndex + 1}</div>
            <div className='player-score'>score: {score[playerIndex]}</div>
            <div className='player-message'>{message}</div>
          </div>
        )
      })}
    </div>
  )
}
