import React, { ComponentProps, useState } from 'react'
import { Card } from '../Card/Card'
import { useGetCardTransformations } from './utils/useGetCardTransformations'
import './Board.css'

interface Props {
  cards: ComponentProps<typeof Card>[]
  activePlayer: number
  setActivePlayer: (activePlayer: number) => void
  score: number[]
  setScore: (score: number[]) => void
}

const FLIP_BACK_DELAY_MS = 1500

export const Board = ({ cards, activePlayer, setActivePlayer, score, setScore }: Props) => {
  const [flippedCards, setFlippedCards] = useState<Props['cards']>([])
  const cardTransformations = useGetCardTransformations(cards)

  // TODO: try to extract this function
  const handleCardFlip = (card: ComponentProps<typeof Card>) => {
    if (card.matchedBy != null || flippedCards.includes(card) || flippedCards.length > 1) {
      return
    }
    setFlippedCards([...flippedCards, card])

    if (flippedCards.length < 1) {
      return
    }

    // there's a match
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
      }, FLIP_BACK_DELAY_MS)
    }
  }

  return (
    <div className='board'>
      {cards.map(card => {
        const { top, left, rotation } = cardTransformations[card.id]

        return (
          <Card
            {...card}
            key={card.id}
            onClick={() => handleCardFlip(card)}
            isFlipped={flippedCards.includes(card) || card.matchedBy != null}
            topOffset={top}
            leftOffset={left}
            rotation={rotation}
          />
        )
      })}
    </div>
  )
}
