import { CardOffset, MemoCard } from '../../../types'

export const isCardPositionOverlapping = (
  newOffset: CardOffset,
  cards: MemoCard[],
  maxOverlap: number
) =>
  cards.some(card => {
    const xOverlap = Math.abs(card.transformations.left - newOffset.left) < maxOverlap
    const yOverlap = Math.abs(card.transformations.top - newOffset.top) < maxOverlap

    return xOverlap && yOverlap
  })
