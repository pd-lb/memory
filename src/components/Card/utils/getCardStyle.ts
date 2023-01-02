import { ComponentProps, CSSProperties } from 'react'
import { Card } from '../Card'

export const getCardStyle = ({
  topOffset,
  leftOffset,
  rotation = 0,
}: Partial<ComponentProps<typeof Card>>): CSSProperties | undefined =>
  topOffset != null && leftOffset != null
    ? {
        position: 'absolute',
        top: `${topOffset}px`,
        left: `${leftOffset}px`,
        transform: `rotate(${rotation}deg)`,
      }
    : undefined
