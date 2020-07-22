import React, { Component } from 'react'
import Item from './Item'
export default class Items extends Component {
    state = {
        inputAdd: ""
    }
    render() {
        let { items } = this.props
        // console.log("item component::::", items);
        return (
            <div>
                <input onChange={(e) => {
                    this.setState({ inputAdd: e.target.value })
                }} />
                <button onClick={() => {
                    this.props.createDispatch(this.state.inputAdd)
                }}>Add</button>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        {(items) && items.map((item, index) => <Item item={item} key={index} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
