import React, { useState } from 'react'
import Board from '../Board/Board'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import { generateCards } from '../../utils/generateCards'

const GameContainer = () => {
  const [cardPairs, setCardPairs] = useState(8)
  const [cards, setCards] = useState(generateCards(cardPairs))
  const [activePlayer, setActivePlayer] = useState(0)
  const [score, setScore] = useState([0, 0])
  const [allCardsMatched, setAllCardsMatched] = useState(false)

  return (
    <div className='game-container'>
      <PlayerInfo
        activePlayer={allCardsMatched ? score.indexOf(Math.max(...score)) : activePlayer}
        score={score}
        allCardsMatched={allCardsMatched}
      />
      <Board
        cards={cards}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        score={score}
        setScore={setScore}
      />
    </div>
  )
}

export default GameContainer
