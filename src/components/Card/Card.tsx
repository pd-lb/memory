import React from 'react'
import './Card.css'
import { getCardStyle } from './utils/getCardStyle'

interface Props {
  id: number
  symbol: string
  onClick?: () => void
  isFlipped?: boolean
  matchedBy?: number | null
  topOffset?: number | null
  leftOffset?: number | null
  rotation?: number | null
}

export const Card = ({
  symbol,
  onClick,
  isFlipped = false,
  matchedBy = null,
  topOffset = null,
  leftOffset = null,
  rotation = null,
}: Props) => (
  <div
    onClick={onClick && onClick}
    className={`card ${isFlipped ? 'flipped' : ''}`}
    style={getCardStyle({ topOffset, leftOffset, rotation })}
  >
    <div className='card_inner'>
      <div className='card_back' />
      <div className={`card_front ${matchedBy === null ? '' : `player-${matchedBy}-match`}`}>
        {symbol}
      </div>
    </div>
  </div>
)
