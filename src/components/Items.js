import React, { Component } from 'react'
import Item from './Item'
import './Item.css'
import Pagination from './Pagination'
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
        searchData: '',
        pagination: {
            curPage: 1,
            limit: 3
        }
    }
    render() {
        let { items, createDispatch, searchDispatch, pageDispatch, totalPage } = this.props
        let { updateData, addData, searchData, pagination } = this.state
        // console.log("item component::::", items);
        return (
            <div>
                <label>Name : </label>
                <input value={addData.name} onChange={(e) => {
                    this.setState({ addData: { ...addData, name: e.target.value } })
                }} />
                <label>Percent : </label>
                <input value={addData.percent} onChange={(e) => {
                    this.setState({ addData: { ...addData, percent: e.target.value } })
                }} />
                <button className='btn-info' onClick={() => {
                    createDispatch({data:this.state.addData,pagination:{curPage:totalPage,limit:pagination.limit}})
                    this.setState({ addData: { name: '', percent: '' } })
                }}>Add</button>
                {/* SEARCH */}
                <div className='search'>
                    <input value={searchData}
                        onChange={(e) => {
                            this.setState({ searchData: e.target.value })
                        }} />
                    <button onClick={() => {
                        searchDispatch({ textSearch: this.state.searchData, pagination })
                    }}>Search</button>
                    <button onClick={() => {
                        this.setState({ searchData: '' })
                        searchDispatch({ textSearch: '', pagination })
                    }}> Clear Search</button>
                </div>

                <div className='container'>
                    <div className='table-data'>
                        <Pagination curPage={pagination.curPage} totalPage={totalPage}
                            changePage={(e) => {
                                let newPage = { ...pagination, curPage: e }
                                if (searchData){ searchDispatch({ textSearch: searchData, pagination:newPage })}
                                else pageDispatch(newPage)
                                this.setState({ pagination: newPage })
                            }} />
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
                                        deleteDispatch={(item) => { this.props.deleteDispatch({ data: item, textSearch:searchData, pagination }) }}
                                    />)}
                            </tbody>
                        </table>

                    </div>
                    <div className='update-form'>
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
                                this.props.updateDispatch({ data: updateData, textSearch: searchData, pagination })
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
            </div>
        )
    }
}
