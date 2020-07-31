import React, { useState } from 'react'
import './Item.css'
export default function Item(props) {
    let { item, isChecked } = props

    return (
        <tr className={isChecked ? 'choose' : ''}>
            <td>{item.id}</td>
            <td> {item.name}
            </td>
            <td>
                {item.percent}
            </td>
            <td >
                <div className='btn-group'>
                    <button
                        className='btn btn-info'
                        onClick={() => {
                            props.updateChange(item)
                        }} >Edit</button>
                    <button
                        className='btn btn-danger'
                        onClick={() => {
                            props.deleteDispatch( item)
                        }} >Delete</button>
                </div>
            </td>
        </tr>
    )
}
