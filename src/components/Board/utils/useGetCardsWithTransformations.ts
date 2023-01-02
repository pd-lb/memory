import { useMemo } from 'react'
import { useViewportSize } from './useViewportSize'
import { isCardPositionOverlapping } from './isCardPositionOverlapping'
import { CardSymbols, MemoCard } from '../../../types'

export const useGetCardsWithTransformations = (cardSymbols: CardSymbols): MemoCard[] => {
  const { vmin } = useViewportSize()
  // cards should not overlap more than 40% of their max size (12vmin)
  const maxCardOverlap = vmin * 0.12 * 0.4
  // cards should not be moved by more than 90% of vmin
  const maxCardOffset = vmin * 0.9

  return useMemo(() => {
    const cardsWithTransformations: MemoCard[] = []

    cardSymbols.forEach(cardSymbol => {
      let top: number, left: number

      do {
        top = Math.floor(Math.random() * maxCardOffset)
        left = Math.floor(Math.random() * maxCardOffset)
      } while (isCardPositionOverlapping({ top, left }, cardsWithTransformations, maxCardOverlap))

      cardsWithTransformations.push({
        ...cardSymbol,
        transformations: {
          top,
          left,
          // rotation can be a negative value
          // max rotation = 12deg either way
          rotation: Math.floor(Math.random() * 24 - 12),
        },
      })
    })

    return cardsWithTransformations
  }, [cardSymbols, maxCardOffset, maxCardOverlap])
}
