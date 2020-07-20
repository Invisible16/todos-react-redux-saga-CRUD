import React, { Component } from 'react'
import Item from './Item'
export default class Items extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { items } = this.props
        console.log("item component::::", items);
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                        </tr>
                        {(items) && items.map((item, index) => <Item item={item} key={index} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
