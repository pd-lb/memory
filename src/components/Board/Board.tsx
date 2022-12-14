import React from 'react'
import Card from '../Card/Card'
import './Board.css'
interface Props {
  cardsCount: number
}
function Board({ cardsCount }: Props) {
  return (
    <div className='board'>
      {Array.from(Array(cardsCount)).map((_, key) => (
        <Card key={key} />
      ))}
    </div>
  )
}

export default Board
