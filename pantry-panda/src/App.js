import { useState } from 'react'
import { ListItem } from "./components/ListItem"
import logo from './assets/panda (1).png'
// import firebase from './firebase'

function App() {
  // const ref = firebase.firestore().collection('shopping-list')

  const [lineThrough, setLineThrough] = useState(false)

  const toggle = () => {
    setLineThrough(prevState => !prevState)
  }

  return (
    <div className="app">
      <img src={logo} alt='panda eating noodles'/>
      <h5>A friend to help with your shopping checklist!
        <br/>
        Click your items to mark them off your list!
      </h5>
      <input type='text' id='input-field' placeholder="Bread" />
      <div className="button-container">
        <button>Add to List</button>
        <button>Clear List</button>
      </div>

      <ul className="shopping-list">
        <ListItem toggle={toggle} lineThrough={lineThrough} />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}

export default App;