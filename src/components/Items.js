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
        indexChoose: -1,
        searchData: ''
    }
    render() {
        let { items } = this.props
        let { updateData, addData, searchData } = this.state
        // console.log("item component::::", items);
        return (
            <div>
                <label>Name : </label>
                <input onChange={(e) => {
                    this.setState({ addData: { ...addData, name: e.target.value } })
                }} />
                <label>Percent : </label>
                <input onChange={(e) => {
                    this.setState({ addData: { ...addData, percent: e.target.value } })
                }} />
                <button onClick={() => {
                    this.props.createDispatch(this.state.addData)
                }}>Add</button>
                {/* SEARCH */}
                <div className='search'>
                    <input value={searchData}
                    onChange={(e) => {
                        this.setState({ searchData: e.target.value })
                    }} />
                    <button onClick={() => {
                        this.props.searchDispatch(this.state.searchData)
                    }}>Search</button>
                    <button onClick={() => {
                        this.setState({searchData:''})
                        this.props.searchDispatch('')
                    }}> Clear Search</button>
                </div>
                <div className='container'>
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Percent</th>
                                <th>Action</th>
                            </tr>
                            {(items) && items.map((item, index) =>
                                <Item
                                    updateChange={(newData) => { this.setState({ updateData: newData, indexChoose: index }) }}
                                    item={item} key={index}
                                    isChecked={this.state.indexChoose === index}
                                    deleteDispatch={this.props.deleteDispatch}
                                    textSearch={searchData}
                                />)}
                        </tbody>
                    </table>
                    <div >
                        <h3>Id item : {updateData.id}</h3>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" value={updateData.name}
                            onChange={(e) => {
                                this.setState({ updateData: { ...updateData, name: e.target.value } })
                            }}
                        /><br />
                        <label htmlFor="percent">Percent:</label><br />
                        <input type="text" id="percent" name="percent" value={updateData.percent}
                            onChange={(e) => {
                                this.setState({ updateData: { ...updateData, percent: e.target.value } })
                            }} /><br /><br />
                        <button onClick={() => {
                            this.props.updateDispatch({ data: updateData, textSearch: searchData })
                        }}>Update</button>
                        <button
                            onClick={() => {
                                this.setState({
                                    updateData: {
                                        name: "",
                                        percent: ''
                                    },
                                    indexChoose: -1
                                })
                            }}
                        >Clear update</button>
                    </div>
                </div>
            </div>
        )
    }
}
