import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const Dice = ({ value, isHeld, holdDice }) => {
  const diceFaces = {

  }

  return (
    <div>
      <FontAwesomeIcon 
        icon={value === 6 ? faDiceSix : 
          value === 5 ? faDiceFive :
          value === 4 ? faDiceFour :
          value === 3 ? faDiceThree :
          value === 2 ? faDiceTwo
          : faDiceOne} 
        className='dice'
        style={{backgroundColor : isHeld ? '#5035FF' : ''}}
        onClick={holdDice}
        inverse
      />
    </div >

    // <div 
    //   className='dice' 
    //   style={{backgroundColor : isHeld ? '#59E391' : ''}}
    //   onClick={holdDice}
    // >
    //   <h2>
    //     {value}
    //   </h2>
    // </div>
  )
}

export default Dice