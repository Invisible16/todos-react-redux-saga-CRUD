import React from 'react'

export default function Item(props) {
    let { item } = props
    console.log("props item", props);
    return (
        <div>
            <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
            </tr>
        </div>
    )
}
