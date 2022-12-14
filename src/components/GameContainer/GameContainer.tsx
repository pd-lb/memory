import React from 'react'
import Board from '../Board/Board'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import './GameContainer.css'

interface Props {
  cardsCount: number
}

function GameContainer({ cardsCount }: Props) {
  return (
    <div className='game-container'>
      <PlayerInfo />
      <Board cardsCount={cardsCount} />
    </div>
  )
}

export default GameContainer
