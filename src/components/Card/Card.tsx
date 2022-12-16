import React from 'react'
import './Card.css'

interface Props {
  onClick: () => void
  isFlipped: boolean
  symbol: string
}

const Card = ({ symbol, isFlipped, onClick }: Props) => (
  <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
    <div className='card_inner'>
      <div className='card_back' />
      <div className='card_front'>{symbol}</div>
    </div>
  </div>
)

export default Card
