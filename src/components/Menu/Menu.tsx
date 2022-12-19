import { useState } from 'react'
import './Menu.css'

interface Props {
  onNewGameClick: () => void
}

const Menu = ({ onNewGameClick }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <div className='menu-toggle' onClick={() => setOpen(!open)}>
        &#9776;
      </div>
      {open ? (
        <div className='menu-content'>
          <button
            onClick={() => {
              setOpen(false)
              onNewGameClick()
            }}
          >
            New Game
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Menu
