import React, { useState } from 'react'

export default function Items() {

    const [items, setItems] = useState([])

    fetch('http://localhost:8080/api/items')
        .then(data => data.json())
        .then(res => setItems(res.items))

    return (
        <ul>
            {items.map(item => (
                <li key={items.indexOf(item)}>
                    {item.property}
                </li>
            ))}
        </ul>
    )
}

