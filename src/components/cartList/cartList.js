import React, { useContext } from 'react'

import { CartContext } from '../../context/cartContext'

function CartList({ name, price, id }) {
    const [cart, setCart] = useContext(CartContext)

    function removeCourse(id) {
        setCart(cart.filter(item=>item.id !== id))
    }

    return (
        <div>
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={()=>{removeCourse(id)}}>Remover Curso</button>
        </div>
    )
}

export default CartList
