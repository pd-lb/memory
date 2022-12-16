import React, { ComponentProps } from 'react'
import Card from '../Card/Card'
import './Board.css'
interface Props {
  cards: ComponentProps<typeof Card>[]
}
const Board = ({ cards }: Props) => (
  <div className='board'>
    {cards.map((card, key) => (
      <Card {...card} key={key} />
    ))}
  </div>
)

export default Board
