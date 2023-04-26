import { useState, useEffect } from 'react'
import { ListItem } from "./components/ListItem"
import logo from './assets/panda (1).png'
import { auth, googleProvider, db } from './firebase'
import { signInWithPopup } from 'firebase/auth'
import { getDocs, collection } from 'firebase/firestore'

function App() {
  // const ref = firebase.firestore().collection('shopping-list')

  const [lineThrough, setLineThrough] = useState(false)
  const [listItems, setListItems] = useState([])

  const listItemsRef = collection(db, 'shopping-list')

  useEffect(() => {
    const getItemsList = async () => {
     try {
      const data = await getDocs(listItemsRef)
      const filteredData = data.docs.map(doc => ({...doc.data(), id: doc.id}))
      setListItems(filteredData)
      console.log(filteredData)
     } catch (error) {
      console.log(error)
     } 
    }

    getItemsList()
  }, [])

  
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }
  
  const toggle = () => {
    setLineThrough(prevState => !prevState)
  }

  return (
    <div className="app">
      <img src={logo} alt='panda eating noodles'/>
      <button onClick={signInWithGoogle} id='sign-in-button'>Sign In</button>
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
        {listItems.map(item => (
          <ListItem 
            toggle={toggle} 
            lineThrough={lineThrough} 
            name={item.name} 
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
