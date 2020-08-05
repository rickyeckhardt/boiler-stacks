import React, { useState, useEffect } from 'react'

import Layout from './layout'

let fetchedItems



export default function Items() {

    const [items, setItems] = useState([])


    // Get items from api
    useEffect(() => {
        fetch('http://localhost:8080/api/items')
            .then(data => data.json())
            .then(res => setItems(res.items))
    }, []) // putting an empty array as the second parameter makes sure useEffect only runs once


    // Handle delete
    const handleDelete = item => {
        if (window.confirm("Are you sure? This cannot be undone.")) {
            fetch(`http://localhost:8080/api/items/${item._id}`,
                {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    return response.json()
                }).then(function (data) {
                    setItems(items.filter(i => i._id !== item._id))
                })
        }
    }



    return (
        <Layout>
            <ul>
                {items.map(item => (
                    <li key={items.indexOf(item)}>
                        {item.property}
                        <ul>
                            <li>
                                <button>Edit</button>
                            </li>
                            <li>
                                <button onClick={() => handleDelete(item)}>Delete</button>
                            </li>
                        </ul>
                    </li>

                ))}
            </ul>
        </Layout>
    )
}

