import React, { useState } from 'react'
import './Card.css'

interface Props {
  // onClick: () => void
  // isFlipped: boolean
  decimalCode: number
}

function Card({ decimalCode }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)
  const frontSymbol = String.fromCodePoint(decimalCode)

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className='card_inner'>
        <div className='card_back' />
        <div className='card_front'>{frontSymbol}</div>
      </div>
    </div>
  )
}

export default Card
