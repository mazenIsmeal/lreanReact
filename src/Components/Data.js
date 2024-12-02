import React, {Component} from "react";

class Data extends Component {
    render() {
        const {items} = this.props
        const itemList = items.map((item) => {
            return (
            <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
            )
        })
        return (
            <div className="data">
                <p>List Data</p>
                <div>
                    {itemList}
                </div>
            </div>
        )
    }
}

export default Data;