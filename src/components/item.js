export default function Item({name, price}) {
    function handleEdit(e) {
        e.preventDefault()
    }

    function handleDelete(e) {
        e.preventDefault()
    }

    return (
        <div className='item'>
            <p>{name}</p>
            <p>{price}</p>

            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}