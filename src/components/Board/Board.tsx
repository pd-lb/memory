import React, { ComponentProps, useState } from 'react'
import Card from '../Card/Card'
import './Board.css'

interface Props {
  cards: ComponentProps<typeof Card>[]
  activePlayer: number
  setActivePlayer: (activePlayer: number) => void
  score: number[]
  setScore: (score: number[]) => void
}

const Board = ({ cards, activePlayer, setActivePlayer, score, setScore }: Props) => {
  const [flippedCards, setFlippedCards] = useState<ComponentProps<typeof Card>[]>([])
  const handleCardFlip = (card: ComponentProps<typeof Card>) => {
    if (card.matchedBy != null || flippedCards.includes(card) || flippedCards.length > 1) {
      return
    }
    setFlippedCards([...flippedCards, card])

    if (flippedCards.length === 1) {
      if (card.symbol === flippedCards[0].symbol) {
        card.matchedBy = activePlayer
        flippedCards[0].matchedBy = activePlayer
        setFlippedCards([])

        let scoreCopy = [...score]
        scoreCopy[activePlayer] = ++scoreCopy[activePlayer]
        setScore(scoreCopy)
        // TODO: check if there's a win
      } else {
        setTimeout(() => {
          setActivePlayer(Number(!activePlayer))
          setFlippedCards([])
        }, 1500)
      }
    }
  }

  return (
    <div className='board'>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          symbol={card.symbol}
          onClick={() => handleCardFlip(card)}
          isFlipped={flippedCards.includes(card) || card.matchedBy != null}
          matchedBy={card.matchedBy}
        />
      ))}
    </div>
  )
}

export default Board
