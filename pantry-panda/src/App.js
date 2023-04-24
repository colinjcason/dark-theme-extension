import { ListItem } from "./components/ListItem";
import logo from './assets/panda (1).png'

function App() {
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
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}

export default App;
