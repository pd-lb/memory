import React from 'react'
import './Card.css'

interface Props {
  id: number
  symbol: string
  onClick?: () => void
  isFlipped?: boolean
  matchedBy?: number | null
}

const Card = ({ symbol, onClick, isFlipped = false, matchedBy = null }: Props) => (
  <div onClick={onClick && onClick} className={`card ${isFlipped ? 'flipped' : ''}`}>
    <div className='card_inner'>
      <div className='card_back' />
      <div className={`card_front ${matchedBy != null ? `player-${matchedBy}-match` : ''}`}>
        {symbol}
      </div>
    </div>
  </div>
)

export default Card
