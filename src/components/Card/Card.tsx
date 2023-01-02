import React, { CSSProperties } from 'react'
import './Card.css'
import { CardTransformations, MemoCard } from '../../types'
import { isNumber } from '../../utils/isNumber'

const getCardStyle = ({ top = 0, left = 0, rotation = 0 }: CardTransformations): CSSProperties => ({
  top: `${top}px`,
  left: `${left}px`,
  transform: `rotate(${rotation}deg)`,
})

export const Card = ({
  symbol,
  onClick,
  isFlipped = false,
  matchedBy,
  transformations,
}: MemoCard) => (
  <div
    onClick={onClick && onClick}
    className={`card ${isFlipped ? 'flipped' : ''}`}
    style={getCardStyle(transformations)}
  >
    <div className='card_inner'>
      <div className='card_back' />
      <div className={`card_front ${isNumber(matchedBy) ? `player-${matchedBy}-match` : ''}`}>
        {symbol}
      </div>
    </div>
  </div>
)
