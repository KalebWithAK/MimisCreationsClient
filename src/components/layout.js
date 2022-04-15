import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../styles/layout.css'


export default function Layout({ children }) {
    const siteTitle = `Mimi's Creations`
    const navigate = useNavigate()

    function logout() {
        sessionStorage.removeItem('logged_in')
        navigate('/')
    }

    if (!sessionStorage.getItem('logged_in')) {
        return (
            <>
            <header>
                <img src='/images/mimisLogo.png' alt={siteTitle} />

                <Link to='/'>
                    <a>Home</a>
                </Link>

                <Link to='/login'>
                    <a>Login</a>
                </Link>
                <Link to='/register'>
                    <a>Create Account</a>
                </Link>
            </header>

            <main>{children}</main>

            <footer>
                <Link to='/'>
                    <a>← Back to Home</a>
                </Link>

                <p>Shop Policies</p>
            </footer>
            </>
        )
    }

    return (
        <>
        <header>
            <Link to='/'>
                <a>Home</a>
            </Link>

            <Link to='/profile'>
                <a>Profile</a>
            </Link>

            <img src='/images/mimisLogo.png' alt={siteTitle} />

            <Link to='/orders'>
                <a>Orders</a>
            </Link>
            <Link to='/cart'>
                <a>Cart</a>
            </Link>
        </header>

        <main>{children}</main>

        <footer>
            <Link to='/'>
                <a>← Back to Home</a>
            </Link>

            <p>Shop Policies</p>

            <button onClick={logout} to='/'>Logout</button>
        </footer>
        </>
    )
}