import React, { useState } from 'react'
import Board from '../Board/Board'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import './GameContainer.css'
import { generateCards } from '../../utils/generateCards'

function GameContainer() {
  const [cardPairs, setCardPairs] = useState(8)
  const [cards, setCards] = useState(generateCards(cardPairs))

  return (
    <div className='game-container'>
      <PlayerInfo />
      <Board cards={cards} />
    </div>
  )
}

export default GameContainer
