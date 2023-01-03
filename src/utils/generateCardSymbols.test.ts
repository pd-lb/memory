import { generateCardSymbols } from './generateCardSymbols'

describe('generateCardSymbols', () => {
  it.each([2, 3, 4])('returns an array of %i card pairs with unique symbol per pair', pairs => {
    const symbols = generateCardSymbols(pairs)
    expect(symbols).toHaveLength(pairs * 2)

    const uniqueSymbols = new Set(symbols.map(({ symbol }) => symbol))
    expect(uniqueSymbols.size).toBe(pairs)
  })
})
