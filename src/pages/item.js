import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import '../styles/item.css'

export default function Item() {
    const { item_id } = useParams()
    const [item_data, setItemData] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/api/item', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item_id })
        })
        .then(res => res.json())
        .then(data => {
            setItemData(data)
        })
    }, [])

    function addToCart(e) {
        e.preventDefault()

        fetch('http://localhost:3001/api/item/addToCart', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: sessionStorage.getItem('logged_in'),
                item_id
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert('Added item to cart')
            }
            else {
                alert('Sorry, an error occurred')
            }
        })
    }

    return (
        <Layout>
            <h2>{item_data.name}</h2>

            <p>Price: ${(item_data.price | 5.00).toFixed(2)}</p>

            <button onClick={addToCart}>Add to Cart</button>
        </Layout>
    )
}