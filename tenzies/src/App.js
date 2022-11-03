import { useState, useEffect } from 'react'
import Dice from './Dice.js'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

function App() {  
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    if(allHeld && dice.every(die => die.value === dice[0].value)) {
      setTenzies(true)
    }
  }, [dice])
  
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
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const newGame = () => {
    if(tenzies) {
      setTenzies(prevState => !prevState)
      setDice(allNewDice())
    }
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>        
        {dice.map(die => (
          <Dice 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}      
          />
        ))}
      </div>
        <button onClick={tenzies ? newGame : roll} className='roll-button'>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
    </main>
  );
}

export default App;