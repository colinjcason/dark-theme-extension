import { useState } from 'react'
import Dice from './Dice.js'
import { nanoid } from 'nanoid'

function App() {  
  const [die, setDie] = useState(allNewDice())
  
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }

  function allNewDice() {
    let diceArray = []
    for(let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie())
    }
    return diceArray
  }  

  const roll = () => {
    setDie(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  const holdDice = (id) => {
    setDie(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <main>
      <div className='dice-container'>        
        {die.map(dice => (
          <Dice 
            key={dice.id} 
            value={dice.value} 
            isHeld={dice.isHeld}
            holdDice={() => holdDice(dice.id)}          
          />
        ))}
      </div>
        <button onClick={roll} className='roll-button'>
          Roll
        </button>
    </main>
  );
}

export default App;