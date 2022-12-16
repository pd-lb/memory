import React, { ComponentProps, useState } from 'react'
import Card from '../Card/Card'
import './Board.css'

interface CardProperties extends Pick<ComponentProps<typeof Card>, 'symbol'> {
  id: number
  isMatched?: boolean
}

interface Props {
  cards: CardProperties[]
}

const Board = ({ cards }: Props) => {
  const [flippedCards, setFlippedCards] = useState<CardProperties[]>([])
  const handleCardFlip = (card: CardProperties) => {
    if (flippedCards.includes(card) || flippedCards.length > 1) {
      return
    }
    setFlippedCards([...flippedCards, card])

    if (flippedCards.length === 1) {
      if (card.symbol === flippedCards[0].symbol) {
        card.isMatched = true
        flippedCards[0].isMatched = true
        setFlippedCards([])
        // TODO: update cards background color to equal player's color
        // TODO: update active player's score
      } else {
        setTimeout(() => {
          // TODO: next player's turn
          setFlippedCards([])
        }, 1500)
      }
    }

    // TODO: check if there's a win
  }

  return (
    <div className='board'>
      {cards.map(card => (
        <Card
          key={card.id}
          symbol={card.symbol}
          onClick={() => handleCardFlip(card)}
          isFlipped={flippedCards.includes(card) || !!card.isMatched}
        />
      ))}
    </div>
  )
}

export default Board
