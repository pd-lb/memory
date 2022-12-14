import { useMemo } from 'react'
import { useViewportSize } from './useViewportSize'
import { isCardPositionOverlapping } from './isCardPositionOverlapping'
import { CardSymbols, MemoCard } from '../../../types'

export const useGetCardsWithTransformations = (cardSymbols: CardSymbols): MemoCard[] => {
  const { vmin, height, width } = useViewportSize()
  // approx. 12% of the viewport size, per CSS
  const maxCardSizePx = vmin * 0.12
  // approximately
  const headerSizePx = 210
  // to avoid excessive overlap, cards should be positioned away from each other
  // by no less than 40% of their size (width)
  const minCardDistance = maxCardSizePx * 0.4

  return useMemo(() => {
    const cardsWithTransformations: MemoCard[] = []

    cardSymbols.forEach(cardSymbol => {
      let top: number, left: number

      do {
        top = Math.random() * (height - headerSizePx - maxCardSizePx)
        left = Math.random() * (width - maxCardSizePx)
      } while (isCardPositionOverlapping({ top, left }, cardsWithTransformations, minCardDistance))

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
  }, [cardSymbols, height, minCardDistance, maxCardSizePx, width])
}
