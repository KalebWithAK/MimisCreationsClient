import { useNavigate } from 'react-router-dom'

export default function Card({ title, text, img, route }) {
    const navigate = useNavigate()

    function handleClick(e) {
        navigate(route)
    }

    if (text) {
        return (
            <div className='card' onClick={handleClick}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        )
    }

    return (
        <div className='card' onClick={handleClick}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>just some placeholder text</p>
        </div>
    )
}