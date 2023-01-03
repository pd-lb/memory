import { CardOffset, MemoCard } from '../../../types'

export const isCardPositionOverlapping = (
  newOffset: CardOffset,
  cards: MemoCard[],
  minCardDistance: number
) =>
  cards.some(card => {
    const xOverlap = Math.abs(card.transformations.left - newOffset.left) < minCardDistance
    const yOverlap = Math.abs(card.transformations.top - newOffset.top) < minCardDistance

    return xOverlap && yOverlap
  })
