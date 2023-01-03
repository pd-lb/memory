import { renderHook } from '@testing-library/react'
import { useGetCardsWithTransformations } from './useGetCardsWithTransformations'

const cardSymbols = [
  { id: 1, symbol: '🐈' },
  { id: 2, symbol: '🐕' },
  { id: 3, symbol: '🐎' },
]
const cardsWithTransformations = [
  {
    id: 1,
    symbol: '🐈',
    transformations: {
      top: expect.any(Number),
      left: expect.any(Number),
      rotation: expect.any(Number),
    },
  },
  {
    id: 2,
    symbol: '🐕',
    transformations: {
      top: expect.any(Number),
      left: expect.any(Number),
      rotation: expect.any(Number),
    },
  },
  {
    id: 3,
    symbol: '🐎',
    transformations: {
      top: expect.any(Number),
      left: expect.any(Number),
      rotation: expect.any(Number),
    },
  },
]

describe('useGetCardsWithTransformations', () => {
  it('returns an array of cards with transformations', () => {
    const { result } = renderHook(() => useGetCardsWithTransformations(cardSymbols))

    expect(result.current).toEqual(cardsWithTransformations)
  })
})
