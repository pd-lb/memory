export const getPlayerMessage = (player: number, activePlayer: number, winners: number[]) => {
  if (!winners.length && player === activePlayer) {
    return 'Your turn'
  }
  if (winners.length > 1) {
    return "It's a draw!"
  }
  if (winners.includes(player)) {
    return 'You win!'
  }
}
