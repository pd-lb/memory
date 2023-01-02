import { ComponentProps, useMemo } from 'react'
import { useViewportSize } from './useViewportSize'
import { Card } from '../../Card/Card'

type CardTransformation = { top: number; left: number; rotation?: number }

const isCardOverlapExceeded = (
  newOffset: CardTransformation,
  offsets: CardTransformation[],
  maxOverlap: number
) =>
  offsets.some(existingOffset => {
    const xOverlap = Math.abs(existingOffset.left - newOffset.left) < maxOverlap
    const yOverlap = Math.abs(existingOffset.top - newOffset.top) < maxOverlap

    return xOverlap && yOverlap
  })

export const useGetCardTransformations = (
  cards: ComponentProps<typeof Card>[]
): CardTransformation[] => {
  const { vmin } = useViewportSize()
  // cards should not overlap more than 40% of their max size (12vmin)
  const maxCardOverlap = vmin * 0.12 * 0.4
  // cards should not be moved by more than 90% of vmin
  const maxCardOffset = vmin * 0.9

  return useMemo(() => {
    const transformations: CardTransformation[] = []

    cards.forEach(() => {
      let top: number, left: number

      do {
        top = Math.floor(Math.random() * maxCardOffset)
        left = Math.floor(Math.random() * maxCardOffset)
      } while (isCardOverlapExceeded({ top, left }, transformations, maxCardOverlap))

      // rotation can be a negative value
      // max rotation = 12deg either way
      transformations.push({ top, left, rotation: Math.floor(Math.random() * 24 - 12) })
    })

    return transformations
  }, [cards, maxCardOffset, maxCardOverlap])
}
