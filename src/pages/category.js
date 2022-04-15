import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import Card from '../components/card'

export default function Category() {
    const { category_id } = useParams()
    const [category_data, setCategoryData] = useState({})
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/category', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category_id })
        })
        .then(res => res.json())
        .then(data => {
            setCategoryData(data)
        })

        fetch('http://localhost:3001/api/item', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category_id })
        })
        .then(res => res.json())
        .then(items => {
            setItems([...items])
            console.log(items)
        })
    }, [])

    return (
        <Layout>
            <h2>{category_data.name}</h2>
            <p>{category_data.description}</p>


            <div className='cardContainer'>
                {items.map(i => <Card title={i.name} route={`/item/${i.item_id}`} />)}
            </div>
        </Layout>
    )
}