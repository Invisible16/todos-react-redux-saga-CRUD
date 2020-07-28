import React, { useState } from 'react'
import './Item.css'
export default function Item(props) {
    let { item, isChecked,textSearch } = props
    
    return (
        <tr className={isChecked? 'choose': ''}>
            <td>{item.id}</td>
            <td> {item.name}
            </td>
            <td>
                {item.percent}
            </td>
            <td>
                <button onClick={() => {
                    props.updateChange(item)
                }} >Edit</button>
                <button onClick={() => {
                    props.deleteDispatch({data:item,textSearch})
                }} >Delete</button> </td>
        </tr>
    )
}
