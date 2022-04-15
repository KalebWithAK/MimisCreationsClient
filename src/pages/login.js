import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout'
import '../styles/login.css'

export default function Login({ history }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleLogin(e) {
        e.preventDefault()
    
        // TODO: validate credentials
        fetch('http://localhost:3001/api/customer/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.logged_in) {
                sessionStorage.setItem('logged_in', email) // email will later be a session_token
                navigate('/')
            }
        })
    }
    
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }


    return (
        <Layout>
            <h2 style={{textAlign: 'center'}}>Login</h2>
            
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handlePasswordChange} />

                <button onClick={handleLogin}>Login</button>
            </form>
        </Layout>
    )
}