import React, { ComponentProps, useState } from 'react'
import Card from '../Card/Card'
import { useCardTransformations } from './utils/useCardTransformations'
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
  const cardTransformations = useCardTransformations(cards)
  const handleCardFlip = (card: ComponentProps<typeof Card>) => {
    if (card.matchedBy != null || flippedCards.includes(card) || flippedCards.length > 1) {
      return
    }
    setFlippedCards([...flippedCards, card])

    if (flippedCards.length === 1) {
      if (card.symbol === flippedCards[0].symbol) {
        // indicate who matched the cards
        card.matchedBy = activePlayer
        flippedCards[0].matchedBy = activePlayer
        setFlippedCards([])

        // update active player's score
        const scoreCopy = [...score]
        scoreCopy[activePlayer] = ++scoreCopy[activePlayer]
        setScore(scoreCopy)
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
          {...card}
          key={card.id}
          onClick={() => handleCardFlip(card)}
          isFlipped={flippedCards.includes(card) || card.matchedBy != null}
          topOffset={cardTransformations[card.id].top}
          leftOffset={cardTransformations[card.id].left}
          rotation={cardTransformations[card.id].rotation}
        />
      ))}
    </div>
  )
}

export default Board