import React, { useMemo } from 'react'
import './PlayerInfo.css'
import { getWinners } from './utils/getWinners'
import { getPlayerMessage } from './utils/getPlayerMessage'

interface Props {
  activePlayer: number
  score: number[]
  cardPairs: number
}

export const PlayerInfo = ({ activePlayer, score, cardPairs }: Props) => {
  const winners = useMemo(() => getWinners(score, cardPairs), [score, cardPairs])

  return useMemo(
    () => (
      <div className='player-info'>
        {[1, 2].map((_, playerIndex) => {
          const playerMessage = getPlayerMessage(playerIndex, activePlayer, winners)
          const playerClassNames = `player-${playerIndex}
        ${!winners.length && activePlayer === playerIndex ? 'active' : ''}
        ${winners.includes(playerIndex) ? 'winner' : ''}`

          return (
            <div key={playerIndex} className={playerClassNames}>
              <div className='player-name'>Player {playerIndex + 1}</div>
              <div className='player-score'>score: {score[playerIndex]}</div>
              <div className='player-message'>{playerMessage}</div>
            </div>
          )
        })}
      </div>
    ),
    [activePlayer, score, winners]
  )
}
