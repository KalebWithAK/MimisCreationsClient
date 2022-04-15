import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout'
import '../styles/register.css'

export default function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('United States')

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleStreetChange(e) {
        setStreet(e.target.value)
    }

    function handleCityChange(e) {
        setCity(e.target.value)
    }

    function handleStateChange(e) {
        setState(e.target.value)
    }

    function handleZipChange(e) {
        setZip(e.target.value)
    }

    function handleCountryChange(e) {
        setCountry(e.target.value)
    }

    function handleRegister(e) {
        e.preventDefault()
        
        setName(name.trim())

        if (name && email && password) {
            fetch('http://localhost:3001/api/customer/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    password, 
                    street, 
                    city, 
                    state,
                    zip,
                    country 
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.logged_in) {
                    sessionStorage.setItem('logged_in', email) // email will later be a session_token
                    navigate('/')
                }
            })
        }
        
    }

    return (
        <Layout>
            <h2 style={{textAlign: 'center'}}>Create an Account</h2>

            <form onSubmit={handleRegister}>
                <label htmlFor='name'>Name</label>
                <input type='text' required onChange={handleNameChange} />

                <label htmlFor='email'>Email</label>
                <input type='email' required onChange={handleEmailChange} />

                <label htmlFor='password'>Password</label>
                <input type='password' required onChange={handlePasswordChange} />

                <label>Shipping Address</label>
                <div>
                    <input type='street' placeholder='street' onChange={handleStreetChange} />
                    <input type='city' placeholder='city' onChange={handleCityChange} />
                    <input type='state' placeholder='state' onChange={handleStateChange} />
                    <input type='zip' placeholder='zip' onChange={handleZipChange} />
                    <input type='country' placeholder='country' onChange={handleCountryChange} />
                </div>
                


                <button onClick={handleRegister}>Register</button>
            </form>
        </Layout>
    )
}