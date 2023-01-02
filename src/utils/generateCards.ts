// the Fisher-Yates shuffling algorithm
const shuffleArray = (arr: any[]): any[] => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}

export const generateCards = (pairs: number) => {
  const safeEmojiRangeStart = 127780
  const safeEmojiRangeEnd = 127891
  const cardSymbols: string[] = []

  while (cardSymbols.length < pairs * 2) {
    const decimalCode =
      Math.floor(Math.random() * (safeEmojiRangeEnd - safeEmojiRangeStart)) + safeEmojiRangeStart
    const cardSymbol = String.fromCodePoint(decimalCode)

    if (!cardSymbols.includes(cardSymbol)) {
      cardSymbols.push(cardSymbol, cardSymbol)
    }
  }

  return shuffleArray(cardSymbols).map((symbol, id) => ({ id, symbol }))
}
