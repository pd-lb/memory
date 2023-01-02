import React from 'react'
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

export const PlayerInfo = ({ activePlayer, score, cardPairs }: Props) => {
  const winners: number[] = []

  // TODO: extract getWinners
  // TODO: use useMemo?
  if (score[0] + score[1] === cardPairs) {
    if (score[0] > score[1]) {
      winners.push(0)
    } else if (score[0] < score[1]) {
      winners.push(1)
    } else {
      winners.push(0, 1)
    }
  }

  return (
    <div className='player-info'>
      {[1, 2].map((_, playerIndex) => (
        <div
          key={playerIndex}
          className={`player-${playerIndex} ${
            !winners.length && activePlayer === playerIndex ? 'active' : ''
          } ${winners.includes(playerIndex) ? 'winner' : ''}`}
        >
          <div className='player-name'>Player {playerIndex + 1}</div>
          <div className='player-score'>score: {score[playerIndex]}</div>
          <div className='player-message'>{getMessage(playerIndex, activePlayer, winners)}</div>
        </div>
      ))}
    </div>
  )
}
