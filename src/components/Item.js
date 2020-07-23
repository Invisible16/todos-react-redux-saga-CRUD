import React from 'react'

export default function Item(props) {
    let { item } = props
    // console.log("props item", props);
    return (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.percent}</td>
            </tr>
    )
}
