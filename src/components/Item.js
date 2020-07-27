import React, { useState } from 'react'
import './Item.css'
export default function Item(props) {
    let { item, isChecked } = props
    return (
        <tr>
            <td><input type="checkbox" checked={isChecked }
                onChange={(e) => {
                    if (e.target.checked) { props.updateChange(item) }
                    else props.updateChange({ name: '', percent: '' })

                }}
            /> </td>
            <td>{item.id}</td>
            <td> {item.name}
            </td>
            <td>
                {item.percent}
            </td>
        </tr>
    )
}
