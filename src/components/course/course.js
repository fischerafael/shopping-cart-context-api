import React, { useContext } from 'react'

import { CartContext } from '../../context/cartContext'

function Course({ name, price }) {
    const [cart, setCart] = useContext(CartContext)

    function addToCart() {        
        const course = {name: name, price: price, id: name + Date.now()}
        console.log(course.id)
        setCart([...cart, course])
    }

    return (
        <div>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={addToCart}>Adicionar ao carrinho</button>
            <hr/>
        </div>
    )
}

export default Course
