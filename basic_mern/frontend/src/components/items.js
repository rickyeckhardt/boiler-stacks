import React, { useState, useEffect } from 'react'

import Layout from './layout'


export default function Items() {

    const [items, setItems] = useState([])


    // Get items from api
    useEffect(() => {
        fetch('http://localhost:8080/api/items')
            .then(data => data.json())
            .then(res => setItems(res.items))
    }, []) // putting an empty array as the second parameter makes sure useEffect only runs once

    // Handle edit
    const handleEdit = item => {

        // Get new data
        const property = prompt("Enter in the new property")

        // Update item in database
        fetch(`http://localhost:8080/api/items/${item._id}`,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ property })
            })
            .then(res => res.json())
            .then(data => {

                // Update the UI
                let updatedItems = [...items]
                updatedItems.forEach(itm => {
                    if (itm._id === data.updatedItem._id) {
                        itm.property = data.updatedItem.property
                    }
                })
                setItems(updatedItems)

                console.log(data) // could send user feedback

            })



    }


    // Handle delete
    const handleDelete = item => {
        if (window.confirm("Are you sure? This cannot be undone.")) {

            // Delete item in database
            fetch(`http://localhost:8080/api/items/${item._id}`,
                {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data) // could send user feedback
                    setItems(items.filter(i => i._id !== item._id)) // Reset items in UI
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
                                <button onClick={() => handleEdit(item)}>Edit</button>
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

