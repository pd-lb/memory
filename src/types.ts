export type CardOffset = { top: number; left: number }
export type CardTransformations = CardOffset & {
  rotation: number
}
export type MemoCard = {
  id: number
  symbol: string
  onClick?: () => void
  isFlipped?: boolean
  matchedBy?: number
  transformations: CardTransformations
}
export type CardSymbols = Pick<MemoCard, 'id' | 'symbol'>[]
