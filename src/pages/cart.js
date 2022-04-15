import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Item from '../components/item'

import '../styles/cart.css'

export default function Cart() {
    const email = sessionStorage.getItem('logged_in')
    const [cart_items, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/api/customer/cart', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(data => {
            setCartItems(data)

            for (let i = 0; i < data.length; i++) {
                setTotal(data[i].price + total)
            }
        })
    }, [])

    function handleCheckout(e) {
        e.preventDefault()

        alert('checkout')
    }

    return (
        <Layout>
            <h2 className='cart'>Your Cart</h2>

            <div className='cart'>
                {cart_items.map(item => <Item key={item.item_id} name={item.name} price={`$${item.price.toFixed(2)}`}/>)}

                <p className='total'>Total: {`$${total.toFixed(2)}`}</p>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </Layout>
    )
}