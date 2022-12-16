import { ComponentProps } from 'react'
import Card from '../components/Card/Card'

const shuffleArray = (arr: any[]) => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}
export const generateCards = (cardPairs: number) => {
  const safeEmojiMin = 127780
  const safeEmojiMax = 127891
  const decimalCodes: number[] = []
  const cards: ComponentProps<typeof Card>[] = []

  while (decimalCodes.length < cardPairs) {
    const decimalCode = Math.floor(Math.random() * (safeEmojiMax - safeEmojiMin)) + safeEmojiMin
    if (!decimalCodes.includes(decimalCode)) {
      decimalCodes.push(decimalCode)

      const frontSymbol = String.fromCodePoint(decimalCode)
      cards.push({ frontSymbol }, { frontSymbol })
    }
  }

  return shuffleArray(cards)
}
