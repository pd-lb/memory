export const getWinners = (score: number[], cardPairs: number): number[] => {
  const winners: number[] = []

  // if there are still cards to be matched
  if (score[0] + score[1] < cardPairs) {
    return []
  }
  if (score[0] >= score[1]) {
    winners.push(0)
  }
  if (score[0] <= score[1]) {
    winners.push(1)
  }

  return winners
}
