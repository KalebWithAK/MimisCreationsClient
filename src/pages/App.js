import { useState, useEffect } from 'react'
import '../styles/App.css'
import Layout from '../components/layout'
import Card from '../components/card'

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/api/category')
    .then(response => response.json())
    .then(data => setCategories(data))
  }, [])
  const [categories, setCategories] = useState([])


  return (
    <Layout>
      <h1>Mimi's Creations</h1>
      <p style={{ textAlign: 'center', margin: '-1rem 0 2rem' }}>I love to create beautiful things</p>
      
      <h2>Categories</h2>
      <div className='cardContainer'>
        {categories.map(c => <Card title={c.name} text={c.description} img={c.img} route={`/category/${c.id}`} />)}
      </div>
    </Layout>
  );
}

export default App;
