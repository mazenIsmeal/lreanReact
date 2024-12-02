import { Component } from "react";

class Module extends Component {
    state = {
        name: 'mazen'
    }

    handel = () => {
        console.log(this.state.name);
    }
    
    render () {
        return (
            <div>
                <button onClick={this.handel}>click</button>
                <p>mazen</p>
            </div>
        )
    }
}

export default Module;