import { CardSymbols } from '../types'

// the Fisher-Yates shuffling algorithm
const shuffleArray = (arr: any[]): any[] => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}
// Unicode code points that are supported by the font used to render card symbols
const SAFE_EMOJI_RANGE_START = 127780
const SAFE_EMOJI_RANGE_END = 127891

export const generateCardSymbols = (pairs: number): CardSymbols => {
  const symbols: string[] = []

  while (symbols.length < pairs * 2) {
    const decimalCode =
      Math.floor(Math.random() * (SAFE_EMOJI_RANGE_END - SAFE_EMOJI_RANGE_START)) +
      SAFE_EMOJI_RANGE_START
    const cardSymbol = String.fromCodePoint(decimalCode)

    if (!symbols.includes(cardSymbol)) {
      symbols.push(cardSymbol, cardSymbol)
    }
  }

  return shuffleArray(symbols).map((symbol, id) => ({ id, symbol }))
}
