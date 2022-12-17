import React, { useState } from 'react'
import './App.css'
import PlayerInfo from './components/PlayerInfo/PlayerInfo'
import Board from './components/Board/Board'
import generateCards from './utils/generateCards'
import Menu from './components/Menu/Menu'

const App = () => {
  const cardPairs = 8
  const [cards, setCards] = useState(generateCards(cardPairs))
  const [activePlayer, setActivePlayer] = useState(0)
  const [score, setScore] = useState([0, 0])

  const resetGame = () => {
    setCards(generateCards(cardPairs))
    setActivePlayer(0)
    setScore([0, 0])
  }

  return (
    <div className='App'>
      <header className='App-header'>&#127356;&#127348;&#127356;&#127358;</header>
      <Menu onNewGameClick={resetGame} />
      <PlayerInfo activePlayer={activePlayer} score={score} cardPairs={cardPairs} />
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

export default App
