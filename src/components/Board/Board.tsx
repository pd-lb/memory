import React, { ComponentProps } from 'react'
import Card from '../Card/Card'
import './Board.css'
interface Props {
  cards: ComponentProps<typeof Card>[]
}
function Board({ cards }: Props) {
  return (
    <div className='board'>
      {cards.map((card, key) => (
        <Card decimalCode={card.decimalCode} key={key} />
      ))}
    </div>
  )
}

export default Board
