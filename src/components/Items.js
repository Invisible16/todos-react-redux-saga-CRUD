import React, { Component } from 'react'
import Item from './Item'
import './Item.css'
export default class Items extends Component {
    state = {
        name: "",
        percent: ''
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
                <div className='container'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Choose</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Percent</th>

                            </tr>
                            {(items) && items.map((item, index) =>
                                <Item
                                    updateChange={(newData) => { this.setState(newData) }}
                                    item={item} key={index} />)}
                        </tbody>
                    </table>
                    <form action="">
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" defaultValue={this.state.name}
                            onChange={(e) => {
                                this.setState({ name: e.target.value })
                            }}
                        /><br />
                        <label htmlFor="percent">Percent:</label><br />
                        <input type="text" id="percent" name="percent" defaultValue={this.state.percent}
                            onChange={(e) => {
                                this.setState({ percent: e.target.value })
                            }} /><br /><br />
                        <button onClick={() => {
                            this.props.updateDispatch(this.state)
                            console.log('update')
                        }}>Update</button>
                    </form>
                </div>
            </div>
        )
    }
}
