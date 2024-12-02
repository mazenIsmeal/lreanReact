import React, {Component} from 'react';
import Module from './module'
// import Data from './Components/Data';

class App extends Component {
  state = {
    items: [
      {id: 1, name: 'mazen', age: 23},
      {id: 2, name: 'ashraf', age: 29},
      {id: 3, name: 'ismeal', age: 28},
    ],
    name: ''
  }

  handelChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="App">
        <Module />
        {/* <Data items={this.state.items} /> */}
        <form onSubmit={this.handelSubmit}>
          <input type='text' onChange={this.handelChange} />
          <button>Submit</button>
        </form>
        <div>
          {this.state.name}
        </div>
      </div>
    );
  }
  
}

export default App;
