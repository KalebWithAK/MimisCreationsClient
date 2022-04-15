import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './pages/App'
import Login from './pages/login'
import Register from './pages/register'
import Category from './pages/category'
import Item from './pages/item'
import Cart from './pages/cart'
import Profile from './pages/profile'

const routes = [
  { path: '/', element: <App /> },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  { path: 'category/:category_id', element: <Category /> },
  { path: 'item/:item_id', element: <Item /> },
  { path: 'cart', element: <Cart /> },
  { path: 'profile', element: <Profile /> }
]
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes.map(i => <Route key={routes.indexOf(i)} path={i.path} element={i.element} />)}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
