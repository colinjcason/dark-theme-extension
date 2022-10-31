import React from 'react'

const Dice = ({ value, isHeld, holdDice }) => {
  return (
    <div 
      className='dice' 
      style={{backgroundColor : isHeld ? '#59E391' : ''}}
      onClick={holdDice}
    >
      <h2>
        {value}
      </h2>
    </div>
  )
}

export default Dice