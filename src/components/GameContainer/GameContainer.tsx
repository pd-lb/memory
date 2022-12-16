import React, { useState } from 'react'
import Board from '../Board/Board'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import './GameContainer.css'
import { generateCards } from '../../utils/generateCards'

const GameContainer = () => {
  const [cardPairs, setCardPairs] = useState(8)
  const [cards, setCards] = useState(generateCards(cardPairs))
  const [activePlayer, setActivePlayer] = useState(0)
  const [scores, setScores] = useState([0, 0])
  const [allCardsMatched, setAllCardsMatched] = useState(false)

  return (
    <div className='game-container'>
      <PlayerInfo
        activePlayer={allCardsMatched ? scores.indexOf(Math.max(...scores)) : activePlayer}
        scores={scores}
        allCardsMatched={allCardsMatched}
      />
      <Board cards={cards} />
    </div>
  )
}

export default GameContainer
