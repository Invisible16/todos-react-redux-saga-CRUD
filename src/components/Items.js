import React, { Component } from 'react'
import Item from './Item'
import './Item.css'
export default class Items extends Component {
    state = {
        addData: {
            name: "",
            percent: ''
        },
        updateData: {
            name: "",
            percent: ''
        },
        indexChoose: -1
    }
    render() {
        let { items } = this.props
        let { updateData ,addData} = this.state
        // console.log("item component::::", items);
        return (
            <div>
                <label>Name : </label>
                <input onChange={(e) => {
                    this.setState({addData:{...addData, name: e.target.value }})
                }} />
                <label>Percent : </label>
                <input onChange={(e) => {
                    this.setState({addData:{...addData, percent: e.target.value }})
                }} />
                <button onClick={() => {
                    this.props.createDispatch(this.state.addData)
                }}>Add</button>
                <div className='container'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Choose</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Percent</th>
                                <th>Delete</th>
                            </tr>
                            {(items) && items.map((item, index) =>
                                <Item
                                    updateChange={(newData) => { this.setState({ updateData: newData, indexChoose: index }) }}
                                    item={item} key={index}
                                    isChecked={this.state.indexChoose === index}
                                    deleteDispatch={this.props.deleteDispatch}
                                />)}
                        </tbody>
                    </table>
                    <form action="">
                        <h3>Id item : {updateData.id}</h3>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" defaultValue={updateData.name}
                            onChange={(e) => {
                                this.setState({ updateData: { ...updateData, name: e.target.value } })
                            }}
                        /><br />
                        <label htmlFor="percent">Percent:</label><br />
                        <input type="text" id="percent" name="percent" defaultValue={updateData.percent}
                            onChange={(e) => {
                                this.setState({ updateData: { ...updateData, percent: e.target.value } })
                            }} /><br /><br />
                        <button onClick={() => {
                            this.props.updateDispatch(updateData)
                            console.log('update')
                        }}>Update</button>
                    </form>
                </div>
            </div>
        )
    }
}
