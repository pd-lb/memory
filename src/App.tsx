import React, { useState } from 'react'
import './App.css'
import { PlayerInfo } from './components/PlayerInfo/PlayerInfo'
import { Board } from './components/Board/Board'
import { generateCardSymbols } from './utils/generateCardSymbols'
import { Menu } from './components/Menu/Menu'

export const App = () => {
  const cardPairs = 8
  const [cardSymbols, setCardSymbols] = useState(generateCardSymbols(cardPairs))
  const [activePlayer, setActivePlayer] = useState(0)
  const [score, setScore] = useState([0, 0])

  const resetGame = () => {
    setCardSymbols(generateCardSymbols(cardPairs))
    setActivePlayer(0)
    setScore([0, 0])
  }

  return (
    <div className='App'>
      <header className='App-header'>&#127356;&#127348;&#127356;&#127358;</header>
      <Menu onNewGameClick={resetGame} />
      <PlayerInfo activePlayer={activePlayer} score={score} cardPairs={cardPairs} />
      <Board
        cardSymbols={cardSymbols}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        score={score}
        setScore={setScore}
      />
    </div>
  )
}
