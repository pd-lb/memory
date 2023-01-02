import React, { useCallback, useState } from 'react'
import { Card } from '../Card/Card'
import { useGetCardsWithTransformations } from './utils/useGetCardsWithTransformations'
import './Board.css'
import { CardSymbols, MemoCard } from '../../types'
import { isNumber } from '../../utils/isNumber'

interface BoardProps {
  cardSymbols: CardSymbols
  activePlayer: number
  setActivePlayer: (activePlayer: number) => void
  score: number[]
  setScore: (score: number[]) => void
}

interface CardFlipHandlerArgs {
  card: MemoCard
  flippedCards: MemoCard[]
  setFlippedCards: (flippedCards: MemoCard[]) => void
  activePlayer: BoardProps['activePlayer']
  setActivePlayer: BoardProps['setActivePlayer']
  score: BoardProps['score']
  setScore: BoardProps['setScore']
}

const FLIP_BACK_DELAY_MS = 1500

const handleCardFlip = ({
  card,
  flippedCards,
  setFlippedCards,
  activePlayer,
  setActivePlayer,
  score,
  setScore,
}: CardFlipHandlerArgs) => {
  if (isNumber(card.matchedBy) || flippedCards.includes(card) || flippedCards.length > 1) {
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

export const Board = ({
  cardSymbols,
  activePlayer,
  setActivePlayer,
  score,
  setScore,
}: BoardProps) => {
  const [flippedCards, setFlippedCards] = useState<MemoCard[]>([])
  const cards = useGetCardsWithTransformations(cardSymbols)

  const onCardClick = useCallback(
    (card: MemoCard) =>
      handleCardFlip({
        card,
        flippedCards,
        setFlippedCards,
        activePlayer,
        setActivePlayer,
        score,
        setScore,
      }),
    [flippedCards, activePlayer, setActivePlayer, score, setScore]
  )

  return (
    <div className='board'>
      {cards.map(card => (
        <Card
          {...card}
          key={card.id}
          onClick={() => onCardClick(card)}
          isFlipped={flippedCards.includes(card) || isNumber(card.matchedBy)}
        />
      ))}
    </div>
  )
}
