import React, { useState } from 'react'
import './Item.css'
export default function Item(props) {
    let { item } = props
    let [newData, setData] = useState({
        id: item.id, name: item.name, percent: item.percent
    })
    let [hide, setHide] = useState(true)
    // console.log("props item", props);
    const setStateCommon = (key, value, oldData, cb) => {
        let newState = { ...oldData, [key]: value }
        cb(newState)
        console.log(oldData)
    }
    return (
        <tr>
            <td>{item.id}</td>
            <td> <span className={hide ? 'unhide' : 'hide'}>{item.name} </span>
                <input
                    className={hide ? 'hide' : 'unhide'}
                    value={newData.name}
                    onChange={(e) => {
                        setStateCommon('name', e.target.value, newData, setData)
                    }}
                ></input>
            </td>
            <td>
                <span className={hide ? 'unhide' : 'hide'}>{item.percent} </span>
                <input
                    className={hide ? 'hide' : 'unhide'}
                    value={newData.percent}
                    onChange={(e) => {
                        setStateCommon('percent', e.target.value, newData, setData)
                    }}
                ></input>
            </td>
            <td>
                <button
                    className={hide ? 'unhide' : 'hide'}

                    onClick={() => {
                        setHide(false)
                    }}>Edit</button>
                <button
                    className={hide ? 'hide' : 'unhide'}
                    onClick={() => {
                        props.updateDispatch(newData)
                        setHide(true)
                    }}>Update</button>
            </td>
        </tr>
    )
}
