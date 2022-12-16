import React from 'react'
import './PlayerInfo.css'

interface Props {
  activePlayer: number
  allCardsMatched: boolean
  scores: number[]
}
const PlayerInfo = ({ activePlayer, allCardsMatched, scores }: Props) => (
  <div className='player-info'>
    {[1, 2].map((_, index) => (
      <div
        key={index}
        className={`player player-${index + 1} ${activePlayer === index ? 'active' : ''}`}
      >
        <div className='player-name'>Player {index + 1}</div>
        <div className='player-score'>score: {scores[index]}</div>
        {!allCardsMatched && activePlayer === index && (
          <div className='player-message'>It's your turn!</div>
        )}
        {allCardsMatched && activePlayer === index && (
          <div className='player-message'>You Won!</div>
        )}
      </div>
    ))}
  </div>
)

export default PlayerInfo
