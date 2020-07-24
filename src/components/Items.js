import React, { Component } from 'react'
import Item from './Item'
import './Item.css'
export default class Items extends Component {
    state = {
        name: "",
        percent: 0
    }
    render() {
        let { items } = this.props
        // console.log("item component::::", items);
        return (
            <div>
                <label>Name : </label>
                <input onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} />
                <label>Percent : </label>
                <input onChange={(e) => {
                    this.setState({ percent: e.target.value })
                }} />
                <button onClick={() => {
                    this.props.createDispatch(this.state)
                }}>Add</button>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Percent</th>
                            <th>Action</th>
                        </tr>
                        {(items) && items.map((item, index) => <Item updateDispatch={this.props.updateDispatch} item={item} key={index} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
