import React, {useState, Fragment} from 'react'
import './App.css';
import Card from '../Card/Card';
import Filter from '../filter/Filter';
import Model from '../Model/Model';
import Button from '../Layout/Button';
import AddUser from '../AddUser/AddUser';

function App() {
  const [cardToggle, setCardToggle] = useState(true)
  const [showModel, setShowModel] = useState(false)
  const [filter, setFilter] = useState('')
  const [state, setState] = useState(
    [
      {
        id: 1,
        name: 'mazen',
        age: 23,
        address: 'ain shams',
        phone: '0109879449',
        type: 'boy'
      },
      {
        id: 2,
        name: 'Hanan',
        age: 30,
        address: 'ain shams',
        phone: '0109879449',
        type: 'girl'
      },
      {
        id: 3,
        name: 'ashraf',
        age: 30,
        address: 'ain shams',
        phone: '0109879449',
        type: 'boy'
      },
      {
        id: 4,
        name: 'Amany',
        age: 40,
        address: 'ain shams',
        phone: '0109879449',
        type: 'girl'
      }
    ]
  )

  const addNewUserHandel = (data) => {
    setState((prevState) => [...prevState , data])
  }

  const deletedItem = (e, selectedID) => {
    // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx)
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectedID)
    }) 
  }

  // const toggleItems = () => {
  //   setCardToggle(!cardToggle)
  // }

  const filtration = (name) => {
    setFilter(name)
  }

  const nameFunc = () => {
    if(filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter))
    }
    return state
  }

  return (
    <Fragment>
    <div className="App">
      
      <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
        <Button onClick={() => setCardToggle(!cardToggle)}>
          {cardToggle ? 'Hide name' : 'Show name'}
        </Button>
        <Button className='btn_toggle' onClick={() => setShowModel(true)}>PopUp</Button>
      </div>
      <Filter filtration={filtration} />
      <div className={cardToggle ? 'show' : 'hide'}>
        <Card list={nameFunc()} type='man' deletedItem={deletedItem} />
      </div>
    </div>
    <Model show={showModel} close={() => setShowModel(false)}>
        <AddUser addNewUserHandel={addNewUserHandel} close={() => setShowModel(false)} />
      </Model>
      </Fragment>
  );
}

export default App;
