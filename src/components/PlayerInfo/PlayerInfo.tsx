import React from 'react'
import './PlayerInfo.css'

interface Props {
  activePlayer: number
  score: number[]
  cardPairs: number
}

const getMessage = (player: number, activePlayer: number, winners: number[]) => {
  if (winners.length > 1) {
    return "It's a draw!"
  }
  if (winners.includes(player)) {
    return 'You win!'
  }
  if (player === activePlayer) {
    return 'Your turn'
  }
}

const PlayerInfo = ({ activePlayer, score, cardPairs }: Props) => {
  let winners: number[] = []

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
      {[1, 2].map((_, index) => (
        <div
          key={index}
          className={`player-${index + 1} ${activePlayer === index ? 'active' : ''} ${
            winners.includes(index) ? 'winner' : ''
          }`}
        >
          <div className='player-name'>Player {index + 1}</div>
          <div className='player-score'>score: {score[index]}</div>
          <div className='player-message'>{getMessage(index, activePlayer, winners)}</div>
        </div>
      ))}
    </div>
  )
}

export default PlayerInfo
